import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserDTO } from 'src/common/dto/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private user: UserService) { }

    @Get('req')
    getUserReq(@Req() req: Request): string {
        return this.user.getUserReq(req);
    }

    @Get(':id')
    getUser(@Param() param: any): string {
        const { id } = param;
        return this.user.getUser(id);
    }

    @Post()
    createUser(@Body() body: UserDTO): number {
        return this.user.createUser(body);
    }

    @Get()
    getUsers(): UserDTO[] {
        return this.user.getUsers();
    }
}
