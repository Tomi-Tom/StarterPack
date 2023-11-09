import { configDotenv } from "dotenv";
import * as process from "process";

configDotenv();

export function getFromEnvironment<T>(key: string, throwIfNotFound: boolean = true): T | undefined {
	const value = process.env[key] as unknown as T | undefined;
	if (value === undefined && throwIfNotFound)
		throw new Error(`Environment variable ${key} not found`);
	return value;
}
