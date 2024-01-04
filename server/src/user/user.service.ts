import { Injectable } from '@nestjs/common';
import {User} from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import { v4 as uuidv4 } from 'uuid';

type UserIdentification = { uuid: string } | {email: string}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async createUser(email: string, name: string, password_hash: string, is_admin: boolean): Promise<User | null> {
        try {
            const uuid = uuidv4();
            const created_at = new Date();
            const user = await this.userRepository.save({
                uuid,
                name,
                settings: {
                    uuid: uuidv4(),
                    lang: "en",
                    theme: "light",
                    picture: "",
                },
                email,
                password_hash,
                created_at,
                profiles: [],
                bio: "",
                is_admin,
            });
            return user;
        } catch (e) {
            console.log(e);
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

    async updateUser(uuid: string, update: {name: string, email: string, bio: string}): Promise<User> {
        const user = await this.userRepository.findOne( {where: {uuid}} );
        if (!user) {
            throw new Error("User not found");
        }
        user.name = update.name;
        user.email = update.email;
        user.bio = update.bio;
        await this.userRepository.save(user);
        return user;
    }
}
