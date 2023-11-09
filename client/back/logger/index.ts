import { app } from "electron";
import winston from "winston";
import type { SyslogConfigSetLevels } from "winston/lib/winston/config";
import { join } from "path";
import Handler from "../utils/meta/Handler";

export type LogLevel = keyof SyslogConfigSetLevels & string

const LOG_FORMAT = (info: winston.Logform.TransformableInfo) => `${info.level} @ ${info.timestamp}: ${info.message}`;

const LOGGER = winston.createLogger({
	level: app.isPackaged ? "info" : "debug",
	format: winston.format.combine(
		winston.format.timestamp({ format: "DD/MM/YYYY HH:mm:ss" }),
		winston.format.printf(LOG_FORMAT)
	),
	levels: winston.config.syslog.levels,
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.printf(LOG_FORMAT)
			)
		}),
		new winston.transports.File({
			filename: join(app.getPath("logs"), "combined.log")
		}),
		new winston.transports.File({
			filename: join(app.getPath("logs"), "error.log"),
			level: "error"
		})
	]
});

export default class Logger {
	@Handler()
	static log(level: LogLevel, message: any) {
		LOGGER.log(level, typeof message === "string" ? message : JSON.stringify(message, undefined, 2));
	}
}
