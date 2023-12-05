import { Injectable } from '@nestjs/common';
import {User} from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

type UserIdentification = { uuid: string } | {email: string}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
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
            return null;
        }
    }

    async getUser(option: UserIdentification): Promise<User> {
        const user = await this.userRepository.findOne( {where: option} );
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}
