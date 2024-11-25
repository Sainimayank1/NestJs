import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { User } from './user.interface';
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
    createUser(@Body() body: User): number {
        return this.user.createUser(body);
    }

    @Get()
    getUsers(): User[] {
        return this.user.getUsers();
    }
}
