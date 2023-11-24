import { contextBridge, ipcRenderer } from "electron";
import Logger, { LogLevel } from "./logger/";
import Installer from "./installer";

const API = {
	logging: {
		log: (level: LogLevel, message: string): Promise<ReturnType<typeof Logger.log>> => ipcRenderer.invoke("log", level, message)
	},
	installing: {
		installFromSteps: (steps: string[]): ReturnType<typeof Installer.installFromSteps> => ipcRenderer.invoke("installFromSteps", steps)
	}
};

export type API = typeof API

contextBridge.exposeInMainWorld("electron", API);
