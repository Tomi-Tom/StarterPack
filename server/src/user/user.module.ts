import { Module } from '@nestjs/common';
import {UserService} from "./user.service";
import UserSettings from "./entities/user-settings.entity";
import {User} from "./entities/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserController} from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User, UserSettings])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
