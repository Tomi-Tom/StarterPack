import {z} from 'zod';

export const userSchema = z.object({
    uuid: z.string().uuid().describe("UUID of the user"),
    name: z.string().min(3).max(255).describe("name"),
    email: z.string().email().describe("Email").transform((val) => val.toLowerCase()),
    password_hash: z.string().min(8).max(255),
    created_at: z.date(),
    is_admin: z.boolean(),
});

export type User = z.infer<typeof userSchema>;

export class UserClass implements User {
    uuid!: string;
    name!: string;
    email!: string;
    password_hash!: string;
    created_at!: Date;
    is_admin!: boolean;
}

export const userSettingsSchema = z.object({
    user_uuid: z.string().uuid().describe("UUID of the user"),
    lang: z.enum(["en", "fr"]).default("en"),
    theme: z.enum(["dark", "light"]).default("light"),
    picture: z.string().url().nullable(),
});

export type UserSettings = z.infer<typeof userSettingsSchema>;

export class UserSettingsClass implements UserSettings {
    user_uuid!: string;
    lang!: "en" | "fr";
    theme!: "dark" | "light";
    picture!: string | null;
}