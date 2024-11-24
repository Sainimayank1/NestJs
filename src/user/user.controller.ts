import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private user: UserService){}

    @Get('req')
    getUserReq(@Req() req: Request): string{
        return this.user.getUserReq(req);
    }
}
