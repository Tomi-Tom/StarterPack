import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATA_SOURCE_CONFIGURATION } from "./utils/database";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { ProfileApplicationRecipeService } from './profile_application_recipe/profile_application_recipe.service';
import { ProfileApplicationRecipeModule } from './profile_application_recipe/profile_application_recipe.module';
import { ApplicationController } from './application/application.controller';
import { ApplicationService } from './application/application.service';
import { ApplicationModule } from './application/application.module';
import { ApplicationRecipeModule } from './application_recipe/application_recipe.module';
import {ProfileApplicationRecipeController} from "./profile_application_recipe/profile_application_recipe.controller";

@Module({
	imports: [ ConfigModule.forRoot({
		isGlobal: true,
		expandVariables: true
	}), TypeOrmModule.forRoot(DATA_SOURCE_CONFIGURATION),
		AuthModule,
		UserModule,
		ProfileModule,
		ProfileApplicationRecipeModule,
		ApplicationModule,
		ApplicationRecipeModule
	],
	controllers: [ProfileController, AuthController, UserController],
	providers: []
})
export class AppModule {
}
