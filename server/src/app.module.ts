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

@Module({
	imports: [ ConfigModule.forRoot({
		isGlobal: true,
		expandVariables: true
	}), TypeOrmModule.forRoot(DATA_SOURCE_CONFIGURATION), AuthModule, UserModule ],
	controllers: [AuthController, UserController],
	providers: [AuthService, UserService]
})
export class AppModule {
}
