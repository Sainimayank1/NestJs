import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { UserDTO } from 'src/common/dto/user';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private user: UserService) { }

    @Get('req')
    getUserReq(@Req() req: Request): string {
        return this.user.getUserReq(req);
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): UserDTO {
        return this.user.getUser(id);
    }

    @Post()
    createUser(@Body(new ValidationPipe()) body: UserDTO): string {
        return this.user.createUser(body);
    }

    @Get()
    getUsers(): UserDTO[] {
        return this.user.getUsers();
    }
}
