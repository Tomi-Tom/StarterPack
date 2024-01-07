import { contextBridge, ipcRenderer } from 'electron';
import Logger, { LogLevel } from './logger/';
import Installer from './installer';
import Identifier from './identifier';


const API = {
    logging: {
        log: (level: LogLevel, message: string): Promise<ReturnType<typeof Logger.log>> => ipcRenderer.invoke('log', level, message)
    },
    installing: {
        installFromSteps: (steps: string[]): ReturnType<typeof Installer.installFromSteps> => ipcRenderer.invoke('installFromSteps', steps)
    },
    identifying: {
        identify: (): ReturnType<typeof Identifier.identify> => ipcRenderer.invoke('identify')
    }
};

export type API = typeof API

contextBridge.exposeInMainWorld('electron', API);
