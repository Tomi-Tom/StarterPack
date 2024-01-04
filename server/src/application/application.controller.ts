import {Body, Controller, Delete, Get, Post, Query} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ApplicationService} from "./application.service";
import {CreateApplicationDto} from "./dto/create.application.dto";

@ApiTags('application')
@Controller('application')
export class ApplicationController {
    constructor(
        private readonly applicationService: ApplicationService,
    ) {}

    @Post()
    async createApplication(
        @Body() createApplicationDto: CreateApplicationDto,
    ) : Promise<void> {
        await this.applicationService.createApplication(createApplicationDto);
    }

    @Get('getApplications')
    async getApplications() {
        return await this.applicationService.getApplications();
    }

    @Get('getApplication')
    async getApplication(
        @Query('uuid') uuid: string,
    ) {
        return await this.applicationService.getApplication(uuid);
    }

    @Post('updateApplication')
    async updateApplication(
        @Query('uuid') uuid: string,
        @Body() updateApplicationDto: CreateApplicationDto,
    ) {
        return await this.applicationService.updateApplication(uuid, updateApplicationDto);
    }

    @Delete()
    async deleteApplication(
        @Query('uuid') uuid: string,
    ) {
        return await this.applicationService.deleteApplication(uuid);
    }
}
