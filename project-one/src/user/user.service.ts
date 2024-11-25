import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    protected users: User[] = [];

    public getUserReq(req: Request) {
        console.log(' getUserReq -----------------> REQ: ', req);
        return "Request printed succesffuly";
    }

    public getUser(id: string) {
        console.log(' getUser -----------------> ID: ', id);
        return "User Id: " + id;
    }

    public createUser(user: User): number {
        console.log(' createUser -----------------> USER: ', user);
        const createdUser = { ...user, id: this.users.length + 1 };
        this.users.push(createdUser);
        console.log(' User Created Succesfully : ', createdUser.id);
        return createdUser.id;
    }

    public getUsers(): User[] {
        console.log(' getUsers -----------------> USERS: ', this.users);
        return this.users;
    }
}
