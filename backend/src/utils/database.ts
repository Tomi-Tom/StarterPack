import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { getFromEnvironment } from "./env";

const isDev = getFromEnvironment<string>("NODE_ENV") === "development";

export const DATA_SOURCE_CONFIGURATION: DataSourceOptions = {
	type: "postgres",
	logging: true,
	logger: isDev ? "advanced-console" : "file",
	namingStrategy: new SnakeNamingStrategy(),
	host: getFromEnvironment<string>("DB_HOST"),
	port: getFromEnvironment<number>("DB_PORT"),
	database: getFromEnvironment<string>("DB_NAME"),
	username: getFromEnvironment<string>("DB_USER"),
	password: getFromEnvironment<string>("DB_PASSWORD"),
	entities: [],
	migrations: [],
	synchronize: isDev
};

export default new DataSource(DATA_SOURCE_CONFIGURATION);
