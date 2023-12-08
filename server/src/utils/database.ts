import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { getFromEnvironment } from "./env";
import {User} from "../user/entities/user.entity";
import UserSettings from "../user/entities/user-settings.entity";
import {Profile} from "../profile/entities/profile.entity";
import {ApplicationRecipe} from "../application_recipe/entities/application_recipe.entity";
import {Application} from "../application/entities/application.entity";

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
	entities: [User, UserSettings, ApplicationRecipe, Application],
	migrations: [],
	synchronize: isDev
};

export default new DataSource(DATA_SOURCE_CONFIGURATION);
