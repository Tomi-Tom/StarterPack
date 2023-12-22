import {Injectable} from '@nestjs/common';
import {Application} from "./entities/application.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {v4 as uuidv4} from 'uuid';
import {CreateApplicationDto} from "./dto/create.application.dto";
import {VerificationState} from "../types/verification.state";

@Injectable()
export class ApplicationService {

    constructor(
       @InjectRepository(Application)
         private applicationRepository: Repository<Application>,
    ) {
    }

    async createApplication(createApplication: CreateApplicationDto): Promise<Application> {
        try {
            const uuid = uuidv4();
            const created_at = new Date();
            return await this.applicationRepository.save(
                {
                    uuid,
                    verification_state: VerificationState.PENDING,
                    created_at,
                    createApplication,
                }
            );
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

    async updateApplication(uuid: string, application: {
        recipes: string[];
        creator_uuid: string | null;
        name: string
    }): Promise<Application> {
        const applicationToUpdate = await this.getApplication(uuid);
        if (applicationToUpdate instanceof Application) {
            applicationToUpdate.recipes = application.recipes;
            applicationToUpdate.creator_uuid = application.creator_uuid;
            applicationToUpdate.name = application.name;
        }
        try {
            return await this.applicationRepository.save(applicationToUpdate);
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
