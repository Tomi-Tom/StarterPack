import { contextBridge, ipcRenderer } from "electron";
import Logger, { LogLevel } from "./logger/";

const API = {
	logging: {
		log: (level: LogLevel, message: string): Promise<ReturnType<typeof Logger.log>> => ipcRenderer.invoke("log", level, message)
	}
};

export type API = typeof API

contextBridge.exposeInMainWorld("electron", API);
