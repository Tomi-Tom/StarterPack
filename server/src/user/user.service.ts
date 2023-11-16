import { Injectable } from '@nestjs/common';
import {User, UserClass, userSchema} from "./dto/user.model";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

type UserIdentification = { id: string } | {email: string}

@Injectable()
export class UserService {
    constructor(
        // TODO: inject the correct User class
        @InjectRepository(userSchema)
        private readonly userRepository: Repository<UserClass>
    ) {
    }

    async createUser(email: string, name: string, password_hash: string, is_admin: boolean): Promise<User | null> {
        try {
            const created_at = new Date();
            const user = await this.userRepository.save({
                email,
                name,
                is_admin,
                password_hash,
                created_at,
            });
            return user;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getUser(option: UserIdentification): Promise<User> {
        const user = await this.userRepository.findOne(option);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}
