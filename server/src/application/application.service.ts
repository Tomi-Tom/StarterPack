import { Injectable } from '@nestjs/common';
import {Application} from "./entities/application.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class ApplicationService {

    constructor(
       @InjectRepository(Application)
         private applicationRepository: Repository<Application>,
    ) {
    }

    async createApplication(application: Application): Promise<Application> {
        try {
            const uuid = uuidv4();
            const created_at = new Date();
            return await this.applicationRepository.save({
                uuid,
                created_at,
                ...application,
            });
        } catch (e) {
            console.log(e);
            throw new Error("Error creating application");
        }
    }

    async getApplications(): Promise<Application[]> {
        const applications = await this.applicationRepository.find();
        if (!applications) {
            throw new Error("Applications not found");
        }
        return applications;
    }

    async getApplication(uuid: string): Promise<Application | null> {
        const application = await this.applicationRepository.findOne({where: {uuid}});
        if (!application) {
            throw new Error("Application not found");
        }
        return application;
    }

    async updateApplication(uuid: string, application: Application): Promise<Application> {
        const applicationToUpdate = await this.getApplication(uuid);
        try {
            return await this.applicationRepository.save({
                ...applicationToUpdate,
                ...application,
            });
        } catch (e) {
            console.log(e);
            throw new Error("Error updating application");
        }
    }

    async deleteApplication(uuid: string): Promise<void> {
        const applicationToDelete = await this.getApplication(uuid);
        if (!applicationToDelete) {
            throw new Error("Application not found");
        }
        try {
        await this.applicationRepository.remove(applicationToDelete);
        } catch (e) {
            console.log(e);
            throw new Error("Error deleting application");
        }
    }
}
