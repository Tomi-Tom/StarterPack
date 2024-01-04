import { Module } from '@nestjs/common';
import {ApplicationService} from "./application.service";
import {ApplicationController} from "./application.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Application} from "./entities/application.entity";
import {ApplicationRecipe} from "../application_recipe/entities/application_recipe.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Application, ApplicationRecipe])],
    providers: [ApplicationService],
    controllers: [ApplicationController]
})
export class ApplicationModule {}
