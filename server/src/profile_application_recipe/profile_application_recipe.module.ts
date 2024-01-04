import { Module } from '@nestjs/common';
import { ProfileApplicationRecipeController } from './profile_application_recipe.controller';
import {ProfileApplicationRecipe} from "./entities/profile_application_recipe.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileApplicationRecipeService} from "./profile_application_recipe.service";

@Module({
    imports: [
          TypeOrmModule.forFeature([ProfileApplicationRecipe])
    ],
    controllers: [ProfileApplicationRecipeController],
    providers: [ProfileApplicationRecipeService],
    exports: [ProfileApplicationRecipeService]
})
export class ProfileApplicationRecipeModule {}
