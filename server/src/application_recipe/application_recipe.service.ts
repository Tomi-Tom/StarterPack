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
            throw new Error("Error creating applicationRecipe");
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
        if (!applicationRecipes) {
            throw new Error("ApplicationRecipes not found");
        }
        return applicationRecipes;
    }

    async updateApplicationRecipe(uuid: string, updateApplicationRecipeDto: CreateApplicationRecipeDto): Promise<ApplicationRecipe> {
        const applicationRecipe = await this.getApplicationRecipe(uuid);
        if (!applicationRecipe) {
            throw new Error("ApplicationRecipe not found");
        }
        try {

            const updatedApplicationRecipe = await this.ApplicationRecipeRepository.save({
                ...applicationRecipe,
                ...updateApplicationRecipeDto,
            });
            return updatedApplicationRecipe;
        } catch (e) {
            console.log(e);
            throw new Error("Error updating applicationRecipe");
        }
    }

    async deleteApplicationRecipe(uuid: string): Promise<void> {
        const applicationRecipe = await this.getApplicationRecipe(uuid);
        if (!applicationRecipe) {
            throw new Error("ApplicationRecipe not found");
        }
        try {
             await this.ApplicationRecipeRepository.remove(applicationRecipe);
        } catch (e) {
            console.log(e);
            throw new Error("Error deleting applicationRecipe");
        }
    }
}
