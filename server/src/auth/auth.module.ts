import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { JwtModule } from '@nestjs/jwt';
import {UserModule} from "../user/user.module";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: 86400 },
            }),
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
