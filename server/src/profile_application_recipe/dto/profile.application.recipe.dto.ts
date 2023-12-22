import {z} from 'zod';

export const profileApplicationRecipeDtoSchema = z.object({
  applicationId: z.array(z.string()).describe(' list of application uuids'),
  recipeId: z.array(z.string()).describe(' list of recipe uuids'),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type ProfileApplicationRecipeDto = z.infer<typeof profileApplicationRecipeDtoSchema>;