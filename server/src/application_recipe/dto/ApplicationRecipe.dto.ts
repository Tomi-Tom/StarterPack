import {string, z} from 'zod';

export const createApplicationRecipeSchema = z.object({
    application_uuid: z.string().uuid().describe( "Application ID"),
    recipe: z.array(z.string()).optional().describe( "Recipe (JSON)"),
    platform: z.string().min(3).max(255).describe( "Platform"),
});

export type CreateApplicationRecipeDto = z.infer<typeof createApplicationRecipeSchema>;

export class CreateApplicationRecipeDtoClass implements CreateApplicationRecipeDto {
    application_uuid!: string;
    recipe!: string[];
    platform!: string;
}

export const findApplicationRecipeSchema = z.object({
    uuid: z.string().uuid().describe( "ApplicationRecipe ID"),
});

export type FindApplicationRecipeDto = z.infer<typeof findApplicationRecipeSchema>;

export const updateApplicationRecipeSchema = z.object({
    uuid: z.string().uuid().describe( "ApplicationRecipe ID"),
    recipe: z.array(z.string()).optional().describe( "Recipe (JSON)"),
    platform: z.string().min(3).max(255).optional().describe( "Platform"),
});

export type UpdateApplicationRecipeDto = z.infer<typeof updateApplicationRecipeSchema>;