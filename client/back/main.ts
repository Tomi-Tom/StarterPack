import { join } from "path";
import { app, BrowserWindow } from "electron";
import Logger from "./logger";

process.env.DIST = join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, "../public");

let MAIN_WINDOW: BrowserWindow | null;
const PRELOAD_PATH = join(__dirname, "./preload.js");
const DEV_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
	Logger.log("info", "Application initialized, creating window...");
	MAIN_WINDOW = new BrowserWindow({
		icon: join(process.env.PUBLIC, "logo.png"),
		webPreferences: {
			contextIsolation: true,
			nodeIntegration: true,
			preload: PRELOAD_PATH
		}
	});
	Logger.log("info", "Window created, loading index...");

	MAIN_WINDOW.loadURL(DEV_URL ?? `file://${join(process.env.DIST, "index.html")}`).catch(console.error);
}

app.on("window-all-closed", () => {
	MAIN_WINDOW = null;
	app.quit();
});

app.whenReady().then(createWindow);
