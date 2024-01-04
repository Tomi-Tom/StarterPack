import {ExecutionContext, Injectable} from "@nestjs/common";
import {UserService} from "../user/user.service";

@Injectable()
export class AdminGuard {
    constructor(
        private readonly userService: UserService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = await this.userService.getUser({uuid: request.user.id});
        return user.is_admin;
    }
}