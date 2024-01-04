import Handler from "../utils/meta/Handler";
import Logger from "../logger";
import { spawn } from "child_process";

export default class Installer {
	@Handler()
	static async installFromSteps(steps: string[]) { // TODO: change steps to match the real values
		Logger.log("info", `Installing from ${steps.length} steps...`);
		let index = 0;
		for (const step of steps) {
			const argv = step.split(/\s/);
			if (!argv[0]) {
				Logger.log("error", `Installation failed at step #${index}, no command provided`);
				return false;
			}
			const childProcess = spawn(argv[0], argv.slice(1));
			const status = await new Promise((resolve: (value: unknown) => void, reject) => {
				childProcess.once("close", code => {
					if (code !== 0) {
						Logger.log("error", `Step #${index} failed with code ${code}`);
						reject(code);
					} else resolve(true);
				});
				childProcess.stdout.on("data", message => {
					message
						.toString()
						.split("\n")
						.filter((message: string) => message)
						.forEach((message: string) => Logger.log("debug", `Received log from #${index}: ${message}`));
				});
				childProcess.stderr.on("data", error => error
					.toString()
					.split("\n")
					.filter((message: string) => message)
					.forEach((error: string) => Logger.log("error", `Received error from #${index}: ${error}`)));
				childProcess.once("exit", code => Logger.log("debug", `Step #${index} exited with code ${code}`));
			})
				.then(() => true)
				.catch(() => false);
			if (!status) {
				Logger.log("error", `Installation failed at step #${index}`);
				return false;
			}
			index++;
		}
		return true;
	}
}
