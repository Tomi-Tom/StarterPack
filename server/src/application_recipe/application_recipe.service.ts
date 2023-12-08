import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ApplicationRecipe} from "./entities/application_recipe.entity";
import {Repository} from "typeorm";
import {CreateApplicationRecipeDto} from "./dto/ApplicationRecipe.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class ApplicationRecipeService {
    constructor(
        @InjectRepository(ApplicationRecipe)
        private readonly ApplicationRecipeRepository: Repository<ApplicationRecipe>
    ) {
    }

    async create(createApplicationRecipeDto: CreateApplicationRecipeDto): Promise<ApplicationRecipe | null> {
        try {
            const uuid = uuidv4();
            const created_at = new Date();
            const applicationRecipe = await this.ApplicationRecipeRepository.save({
                uuid,
                created_at,
                ...createApplicationRecipeDto,
            });
            return applicationRecipe;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getApplicationRecipe(uuid: string): Promise<ApplicationRecipe> {
        const applicationRecipe = await this.ApplicationRecipeRepository.findOne( {where: {uuid}} );
        if (!applicationRecipe) {
            throw new Error("ApplicationRecipe not found");
        }
        return applicationRecipe;
    }

    async getApplicationRecipes(): Promise<ApplicationRecipe[]> {
        const applicationRecipes = await this.ApplicationRecipeRepository.find();
        return applicationRecipes;
    }

    async updateApplicationRecipe(uuid: string, updateApplicationRecipeDto: CreateApplicationRecipeDto): Promise<ApplicationRecipe> {
        const applicationRecipe = await this.getApplicationRecipe(uuid);
        const updatedApplicationRecipe = await this.ApplicationRecipeRepository.save({
            ...applicationRecipe,
            ...updateApplicationRecipeDto,
        });
        return updatedApplicationRecipe;
    }

    async deleteApplicationRecipe(uuid: string): Promise<ApplicationRecipe> {
        const applicationRecipe = await this.getApplicationRecipe(uuid);
        const deletedApplicationRecipe = await this.ApplicationRecipeRepository.remove(applicationRecipe);
        return deletedApplicationRecipe;
    }
}
