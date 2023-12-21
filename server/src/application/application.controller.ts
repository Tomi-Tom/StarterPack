import {Body, Controller, Delete, Get, Post} from '@nestjs/common';
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
    createApplication(
        @Body() createApplicationDto: CreateApplicationDto,
    ) {
        return this.applicationService.createApplication(createApplicationDto);
    }

    @Get('getApplications')
    getApplications() {
        return this.applicationService.getApplications();
    }

    @Get('getApplication')
    getApplication() {
        return this.applicationService.getApplication();
    }

    @Post('updateApplication')
    updateApplication() {
        return this.applicationService.updateApplication();
    }

    @Delete()
    deleteApplication() {
        return this.applicationService.deleteApplication();
    }
}
