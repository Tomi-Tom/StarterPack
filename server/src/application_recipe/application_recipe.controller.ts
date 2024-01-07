import {Body, Controller, Delete, Get, Post, Query} from '@nestjs/common';
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {ApplicationRecipeService} from "./application_recipe.service";
import {
    CreateApplicationRecipeDto,
    CreateApplicationRecipeDtoClass,
    createApplicationRecipeSchema
} from "./dto/ApplicationRecipe.dto";

@ApiTags('application-recipe')
@Controller('applicationRecipe')
export class ApplicationRecipeController {
    constructor(
        private readonly applicationRecipeService: ApplicationRecipeService,
    ) {
    }


    @ApiBody({
        type : CreateApplicationRecipeDtoClass,
    })

    @Post()
    async create(
        @Body() createApplicationRecipeDto: CreateApplicationRecipeDto,
    ) {
        return await this.applicationRecipeService.create(createApplicationRecipeDto);
    }


}
