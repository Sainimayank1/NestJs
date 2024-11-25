import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { User } from './user.interface';

@Injectable()
export class UserService extends LoggerService {
    protected users: User[] = [];

    public getUserReq(req: Request) {
        this.debug(' getUserReq -----------------> REQ: ', req);
        return "Request printed succesffuly";
    }

    public getUser(id: string) {
        this.debug(' getUser -----------------> ID: ', { id });
        return "User Id: " + id;
    }

    public createUser(user: User): number {
        this.debug(' createUser -----------------> USER: ', user);
        const createdUser = { ...user, id: this.users.length + 1 };
        this.users.push(createdUser);
        this.success(' User Created Succesfully : ', { id: createdUser.id });
        return createdUser.id;
    }

    public getUsers(): User[] {
        this.debug(' getUsers -----------------> USERS: ', this.users);
        return this.users;
    }
}
