import { Injectable } from '@nestjs/common';
import {ProfileApplicationRecipe} from "./entities/profile_application_recipe.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProfileApplicationRecipeDto} from "./dto/profile.application.recipe.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class ProfileApplicationRecipeService {
    constructor(
        @InjectRepository(ProfileApplicationRecipe)
        private readonly ProfileApplicationRecipeRepository: Repository<ProfileApplicationRecipe>
    ) {
    }

    async createProfileApplicationRecipe(profileApplicationRecipe: ProfileApplicationRecipeDto): Promise<ProfileApplicationRecipe> {
        try {
            const uuid = uuidv4();
            const created_at = new Date();
            return await this.ProfileApplicationRecipeRepository.save(
                {
                    uuid,
                    created_at,
                    ...profileApplicationRecipe,
                }
            );
        } catch (e) {
            console.log(e);
            throw new Error("Error creating profileApplicationRecipe");
        }
    }

    async getProfileApplicationRecipes(): Promise<ProfileApplicationRecipe[]> {
        const profileApplicationRecipes = await this.ProfileApplicationRecipeRepository.find();
        if (!profileApplicationRecipes) {
            throw new Error("ProfileApplicationRecipes not found");
        }
        return profileApplicationRecipes;
    }

    async getProfileApplicationRecipe(uuid: string): Promise<ProfileApplicationRecipe> {
        const profileApplicationRecipe = await this.ProfileApplicationRecipeRepository.findOne({where: {uuid}});
        if (!profileApplicationRecipe) {
            throw new Error("ProfileApplicationRecipe not found");
        }
        return profileApplicationRecipe;
    }

    async updateProfileApplicationRecipe(uuid: string, profileApplicationRecipe: ProfileApplicationRecipeDto): Promise<ProfileApplicationRecipe> {
        const profileApplicationRecipeToUpdate = await this.getProfileApplicationRecipe(uuid);
        try {
            return await this.ProfileApplicationRecipeRepository.save({
                ...profileApplicationRecipeToUpdate,
                ...profileApplicationRecipe,
            });
        } catch (e) {
            console.log(e);
            throw new Error("Error updating profileApplicationRecipe");
        }
    }

    async deleteProfileApplicationRecipe(uuid: string): Promise<void> {
        const profileApplicationRecipe = await this.getProfileApplicationRecipe(uuid);
        try {
            await this.ProfileApplicationRecipeRepository.remove(profileApplicationRecipe);
        } catch (e) {
            console.log(e);
            throw new Error("Error deleting profileApplicationRecipe");
        }
    }
}
