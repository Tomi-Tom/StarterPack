import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {UserService} from "./user.service";

ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get()
    async getUser(
        @Query('uuid') uuid: string,
    ) {
        return await this.userService.getUser({uuid});
    }

    @Post()
    async updateUser(
        @Body() body: {uuid:string , update: {name: string, email: string, bio: string}},
    ) {
        return await this.userService.updateUser(body.uuid, body.update);
    }

}
