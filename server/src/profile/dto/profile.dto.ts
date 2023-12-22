import {z} from 'zod';

export const ProfileDto = z.object({
    name: z.string().describe( "Name of the profile"),
    description: z.string().describe( "Description of the profile"),
    owner_id: z.string().uuid().describe( "UUID of the owner of the profile"),
    verification_state: z.string().describe( "Verification state of the profile"),
});

export type ProfileDto = z.infer<typeof ProfileDto>;