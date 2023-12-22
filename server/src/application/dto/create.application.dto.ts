import {z, ZodString} from 'zod';


export const createApplicationSchema = z.object({
    name: z.string().min(3).max(255).describe( "Name of the application"),
    creator_uuid: z.string().uuid().describe( "UUID of the creator of the application").nullable(),
    recipes: z.array(z.string().uuid()).describe( "UUIDs of the recipes of the application"),
});

export type CreateApplicationDto = z.infer<typeof createApplicationSchema>;

export const createApplicationResponseSchema = z.object({
    id: z.string().uuid().describe( "UUID of the created application"),
});

export type CreateApplicationResponseDto = z.infer<typeof createApplicationResponseSchema>;

