import {Body, Controller, Delete, Get, Post, Query} from '@nestjs/common';
import {ProfileService} from "./profile.service";
import {ApiTags} from "@nestjs/swagger";
import {ProfileDto} from "./dto/profile.dto";

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
    constructor(
        private readonly profileService: ProfileService,
    ) {}

    @Post()
    async createProfile(
        @Body('profile') profile: ProfileDto
    ) {
        console.log(profile);
        return await this.profileService.createProfile(profile);
    }

    @Get('getProfiles')
    async getProfiles() {
        return await this.profileService.getProfiles();
    }

    @Get('getProfile')
    async getProfile(
        @Query('uuid') uuid: string,
    ) {
        return await this.profileService.getProfile(uuid);
    }

    @Post('updateProfile')
    async updateProfile(
        @Body('uuid') uuid: string,
        @Body('profile') profile: ProfileDto
    ) {
        return await this.profileService.updateProfile(uuid, profile);
    }

    @Delete('deleteProfile')
    async deleteProfile(
        @Query('uuid') uuid: string,
    ) {
        return await this.profileService.deleteProfile(uuid);
    }

    @Get('getInstallScripts')
    async getInstallScripts(
        @Query('uuid') uuid: string,
    ) {
        return await this.profileService.getInstallScripts(uuid);
    }

}
