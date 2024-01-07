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
            const applicationToCreate = {
                uuid: uuidv4(),
                created_at: new Date(),
                //applicationRecipes: createApplication.recipes,
                name: createApplication.name,
                creator_uuid: createApplication.creator_uuid,
                verification_state: VerificationState.PENDING,
            }
            return await this.applicationRepository.save(
                applicationToCreate
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

    async updateApplication(uuid: string, application: CreateApplicationDto
     ): Promise<Application> {
        const applicationToUpdate = await this.getApplication(uuid);
        try {
            const updatedAt = new Date();
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
