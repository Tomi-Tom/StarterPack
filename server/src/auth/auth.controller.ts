import {Body, Controller, Post} from '@nestjs/common';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {
    LoginDto,
    LoginResponseDto, LoginResponseDtoClass,
    RegisterDto,
    RegisterResponseDto, RegisterResponseDtoClass,
} from "./dto/credentialsDto";
import {AuthService} from "./auth.service";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {
    }

    @ApiOkResponse({
        description: 'success',
        type: LoginResponseDtoClass,
    })

    @Post('login')
    async logIn( @Body() { email, password}: LoginDto) : Promise<LoginResponseDto> {
        return await this.authService.login( email, password );
    }

    @ApiOkResponse({
        description: 'user created',
        type: RegisterResponseDtoClass,
    })

    @Post('register')
    async register(@Body() { email, username, password}: RegisterDto) : Promise<RegisterResponseDto>
    {
        return await this.authService.register(email, username, password);
    }
}
