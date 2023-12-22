import {Body, Controller, Delete, Get, Post, Query} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ProfileApplicationRecipeService} from "./profile_application_recipe.service";
import {ProfileApplicationRecipeDto} from "./dto/profile.application.recipe.dto";

@ApiTags('profile-application-recipe')
@Controller('profile-application-recipe')
export class ProfileApplicationRecipeController {
    constructor(
        private readonly profileApplicationRecipeService: ProfileApplicationRecipeService,
    ) {
    }

    @Get()
    async getProfileApplicationRecipes() {
        return await this.profileApplicationRecipeService.getProfileApplicationRecipes();
    }

    @Get('getProfileApplicationRecipe')
    async getProfileApplicationRecipe(
        @Query('uuid') uuid: string,
    ) {
        return await this.profileApplicationRecipeService.getProfileApplicationRecipe(uuid);
    }

    @Post('updateProfileApplicationRecipe')
    async updateProfileApplicationRecipe(
        @Query('uuid') uuid: string,
        @Body() updateProfileApplicationRecipeDto: ProfileApplicationRecipeDto,
    ) {
        return await this.profileApplicationRecipeService.updateProfileApplicationRecipe(uuid, updateProfileApplicationRecipeDto);
    }

    @Delete()
    async deleteProfileApplicationRecipe(
        @Query('uuid') uuid: string,
    ) {
        return await this.profileApplicationRecipeService.deleteProfileApplicationRecipe(uuid);
    }

    @Post()
    async createProfileApplicationRecipe(
        @Body() createProfileApplicationRecipeDto: ProfileApplicationRecipeDto,
    ) {
        return await this.profileApplicationRecipeService.createProfileApplicationRecipe(createProfileApplicationRecipeDto);
    }

}
