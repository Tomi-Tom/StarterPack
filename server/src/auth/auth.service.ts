import {HttpException, Injectable, UnauthorizedException} from '@nestjs/common';
import {LoginResponseDto, RegisterResponseDto} from "./dto/credentialsDto";
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import { hash, verify } from "argon2"

@Injectable()
export class AuthService
{
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {
    }
    async login(email: string, password: string): Promise<LoginResponseDto>
    {
        try {
            const user = await this.userService.getUser({email});
            if (await verify(user.password_hash, password)) {
                const token = this.generateToken(user.uuid);
                return {
                    token
                }
            }
            else {
                throw new UnauthorizedException("Invalid password")
            }
        } catch (e) {
            throw new UnauthorizedException("Invalid email");
        }
    }

    async register(email: string, username: string, password: string): Promise<RegisterResponseDto>
    {
        const user = await this.userService.createUser(email, username, await hash(password), false);
        if (user) {
            const token = this.generateToken(user.uuid);
            return { token: token, id: user.uuid };
        }
        else {
            throw new HttpException("User already exists", 409);
        }
    }

    async verifyToken(token: string): Promise<boolean>
    {
        try {
            this.jwtService.verify(token);
            return true;
        }
        catch (e) {
            return false;
        }
    }

    generateToken(id: string): string
    {
        return this.jwtService.sign({id});
    }
}
