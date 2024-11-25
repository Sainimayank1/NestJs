import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    public getUserReq(req: Request) {
        console.log(' getUserReq -----------------> REQ: ', req);
        return "Request printed succesffuly";
    }

    public getUser(id: string) {
        console.log(' getUser -----------------> ID: ', id);
        return "User Id: " + id;
    }

    public createUser(user: any) {
        console.log(' createUser -----------------> USER: ', user);
        return "User Created: " + user;
    }
}
