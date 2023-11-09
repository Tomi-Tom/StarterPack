import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATA_SOURCE_CONFIGURATION } from "./utils/database";

@Module({
	imports: [ ConfigModule.forRoot({
		isGlobal: true,
		expandVariables: true
	}), TypeOrmModule.forRoot(DATA_SOURCE_CONFIGURATION) ],
	controllers: [],
	providers: []
})
export class AppModule {
}
