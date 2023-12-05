import { Module } from '@nestjs/common';
import { ApplicationRecipeService } from './application_recipe.service';
import { ApplicationRecipeController } from './application_recipe.controller';

@Module({
  providers: [ApplicationRecipeService],
  controllers: [ApplicationRecipeController]
})
export class ApplicationRecipeModule {}
