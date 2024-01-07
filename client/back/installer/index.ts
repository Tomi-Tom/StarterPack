import Handler from '../utils/meta/Handler';
import Logger from '../logger';
import { spawn } from 'child_process';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import fsPromises from 'fs/promises';
import { app } from 'electron';

type StepDescriptor = [ number, string[] ];
type FileMap = Record<string, string>;
type StepExecutor = (descriptor: StepDescriptor, files: FileMap) => Promise<boolean>;

export default class Installer {
    static commands: Record<string, StepExecutor> = {
        downloadFileFromUrl: Installer.downloadFileFromUrl
    };

    static expandFilenames(step: string, files: FileMap): string {
        const formattedStep = Object.keys(files).reduce((step, key) => step.replaceAll(`$${key}`, files[key]), step);
        const remainingKeys = formattedStep.match(/\$[a-zA-Z0-9]+/g);
        if (remainingKeys && remainingKeys.length > 0)
            Logger.log('warning', `Installation step "${step}" contains unexpanded keys: ${remainingKeys.join(', ')}`);
        return formattedStep;
    }

    static createTempDir(): Promise<string | null> {
        return fsPromises.mkdtemp(path.join(app.getPath('temp'), 'stp-installer-')).catch(() => null);
    }

    static async downloadFileFromUrl([ _, [ url, filename ] ]: StepDescriptor, files: FileMap): Promise<boolean> {
        if (filename.toLowerCase() != filename) {
            Logger.log('error', `Installation failed at step #${_}, filename ${filename} is not valid, it must be strictly lowercase`);
            return false;
        }
        const uniqFilename = path.join(app.getPath('temp'), `${filename}_${randomUUID()}`);
        Logger.log('info', `Downloading file from ${url} to ${uniqFilename}...`);
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`Failed to download file from ${url}`);
        if (response.body === null)
            throw new Error(`Failed to download file from ${url}, body is null`);
        const data = await response.arrayBuffer().catch(() => null);
        if (!data)
            throw new Error(`Failed to download file from ${url}, data is null`);
        const result = fsPromises.writeFile(uniqFilename, Buffer.from(data))
          .then(() => uniqFilename)
          .catch(() => null);
        if (!result)
            throw new Error(`Failed to write downloaded file to ${uniqFilename}`);
        Logger.log('info', `Downloaded file from ${url} to ${uniqFilename}`);
        files[filename] = uniqFilename;
        return true;
    }

    static async executeStep([ index, step ]: [ number, string ], files: FileMap): Promise<boolean> {
        step = Installer.expandFilenames(step, files);
        const argv = step.split(/\s/);
        if (!argv[0]) {
            Logger.log('error', `Installation failed at step #${index}, no command provided`);
            return false;
        }
        if (argv[0].startsWith('!')) {
            const command = Installer.commands[argv[0].slice(1)];
            if (!command) {
                Logger.log('error', `Installation failed at step #${index}, unknown command ${command}`);
                return false;
            }
            return await command([ index, argv.slice(1) ], files);
        } else if (!(await Installer.executeCommandLine([ index, argv ]))) {
            Logger.log('error', `Installation failed at step #${index}, could not execute step`);
            return false;
        }
        return true;
    }

    static async executeCommandLine([ stepIndex, argv ]: [ number, string[] ]): Promise<boolean> {
        const cwd = await Installer.createTempDir();
        if (!cwd) {
            Logger.log('error', `Installation failed at step #${stepIndex}, could not create temporary directory`);
            return false;
        }
        const childProcess = spawn(argv[0], argv.slice(1), { cwd });
        return await new Promise((resolve: (value: boolean) => void) => {
            childProcess.once('close', code => {
                if (code !== 0) {
                    Logger.log('error', `Step #${stepIndex} failed with code ${code}`);
                    resolve(false);
                } else resolve(true);
            });
            childProcess.stdout.on('data', message => {
                message
                  .toString()
                  .split('\n')
                  .filter((message: string) => message)
                  .forEach((message: string) => Logger.log('debug', `Received log from #${stepIndex}: ${message}`));
            });
            childProcess.stderr.on('data', error => {
                error
                  .toString()
                  .split('\n')
                  .filter((message: string) => message)
                  .forEach((error: string) => Logger.log('error', `Received error from #${stepIndex}: ${error}`));
            });
            childProcess.once('exit', code => {
                Logger.log('debug', `Step #${stepIndex} exited with code ${code}`);
                resolve(code === 0);
            });
        });
    }

    @Handler()
    static async installFromSteps(steps: string[]) {
        Logger.log('info', `Installing from ${steps.length} steps...`);
        let files = {
            'HOME': app.getPath('home'),
            'APPDATA': app.getPath('appData')
        };
        let index = 0;
        for (const step of steps) {
            if (!await Installer.executeStep([ index, step ], files)) {
                Logger.log('error', `Installation failed at step #${index}, could not execute step`);
                return false;
            }
            index++;
        }
        return true;
    }
}
