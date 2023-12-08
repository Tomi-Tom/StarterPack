import { Module } from '@nestjs/common';
import { ApplicationRecipeService } from './application_recipe.service';
import { ApplicationRecipeController } from './application_recipe.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ApplicationRecipe} from "./entities/application_recipe.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationRecipe])],
  providers: [ApplicationRecipeService],
  controllers: [ApplicationRecipeController]
})
export class ApplicationRecipeModule {}
