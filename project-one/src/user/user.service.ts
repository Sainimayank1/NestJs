import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from 'src/common/dto/user';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UserService extends LoggerService {
    protected users: UserDTO[] = [];

    public getUserReq(req: Request) {
        this.debug(' getUserReq -----------------> REQ: ', req);
        return "Request printed succesffuly";
    }

    public getUser(id: number): UserDTO {
        this.debug(' getUser -----------------> ID: ', { id });
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            this.error(' User Not Found : ', { id });
            throw new NotFoundException('User Not Found', { cause: 'User id not found' });
        }
        return user;
    }

    public createUser(user: UserDTO): string {
        this.debug(' createUser -----------------> USER: ', user);
        const createdUser = { ...user, id: this.users.length + 1 };
        this.users.push(createdUser);
        this.success(' User Created Succesfully : ', { id: createdUser.id });
        return `User Id: ${createdUser.id}`;
    }

    public getUsers(): UserDTO[] {
        this.debug(' getUsers -----------------> USERS: ', this.users);
        if (this.users.length === 0) {
            this.error(' Users Not Found');
            throw new NotFoundException('Users Not Found');
        }
        return this.users;
    }
};;;
