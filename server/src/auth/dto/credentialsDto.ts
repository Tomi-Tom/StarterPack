import {z, ZodString} from 'zod';

export const credentialsSchema = z.object({
    email: z.string().email().describe( "Email").transform((val) => val.toLowerCase()),
    password: z.string().min(8).max(255),
});

export type Credentials = z.infer<typeof credentialsSchema>;

export const loginSchema = credentialsSchema.extend({
});

export type LoginDto = z.infer<typeof loginSchema>;

export const registerSchema = credentialsSchema.extend({
    username: z.string().min(3).max(255).describe( "Username"),
});

export type RegisterDto = z.infer<typeof registerSchema>;

export const loginResponseSchema = z.object({
    token: z.string().describe( "JWT Token available for 1 day"),
    id: z.string().uuid().describe( "UUID of the user"),
});

export type LoginResponseDto = z.infer<typeof loginResponseSchema>;

export const registerResponseSchema = z.object({
    id: z.string().uuid().describe( "UUID of the created user"),
    token: z.string().describe( "JWT Token available for 1 day"),
});

export type RegisterResponseDto = z.infer<typeof registerResponseSchema>;

export class LoginResponseDtoClass implements LoginResponseDto {
    token!: string;
    id!: string;
}

export class RegisterResponseDtoClass implements RegisterResponseDto {
    id!: string;
    token: ZodString["_output"];
}

export class LoginDtoClass implements LoginDto {
    email!: string;
    password!: string;
}

export class RegisterDtoClass implements RegisterDto {
    email!: string;
    password!: string;
    username!: string;
}