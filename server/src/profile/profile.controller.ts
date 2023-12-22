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
    createProfile(
        @Body('profile') profile: ProfileDto
    ) {
        return this.profileService.createProfile(profile);
    }

    @Get('getProfiles')
    getProfiles() {
        return this.profileService.getProfiles();
    }

    @Get('getProfile')
    getProfile(
        @Query('uuid') uuid: string,
    ) {
        return this.profileService.getProfile(uuid);
    }

    @Post('updateProfile')
    updateProfile(
        @Body('uuid') uuid: string,
        @Body('profile') profile: ProfileDto
    ) {
        return this.profileService.updateProfile(uuid, profile);
    }

    @Delete('deleteProfile')
    deleteProfile(
        @Query('uuid') uuid: string,
    ) {
        return this.profileService.deleteProfile(uuid);
    }

}
