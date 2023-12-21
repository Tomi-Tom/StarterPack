import {z, ZodString} from 'zod';


export const createApplicationSchema = z.object({
    name: z.string().min(3).max(255).describe( "Name of the application"),
    description: z.string().min(3).max(255).describe( "Description of the application"),
    url: z.string().url().describe( "URL of the application"),
});

export type CreateApplicationDto = z.infer<typeof createApplicationSchema>;

export const createApplicationResponseSchema = z.object({
    id: z.string().uuid().describe( "UUID of the created application"),
});

export type CreateApplicationResponseDto = z.infer<typeof createApplicationResponseSchema>;

