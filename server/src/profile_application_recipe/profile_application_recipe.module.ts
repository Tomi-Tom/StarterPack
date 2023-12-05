import { Module } from '@nestjs/common';
import { ProfileApplicationRecipeController } from './profile_application_recipe.controller';

@Module({
  controllers: [ProfileApplicationRecipeController]
})
export class ProfileApplicationRecipeModule {}
