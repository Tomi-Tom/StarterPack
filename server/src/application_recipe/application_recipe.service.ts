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
            const created_at = new Date();
            const applicationRecipe = await this.ApplicationRecipeRepository.save({
                created_at,
                ...createApplicationRecipeDto,
            });
            return applicationRecipe;
        } catch (e) {
            console.log(e);
            throw new Error("Error creating applicationRecipe");
        }
    }

}
