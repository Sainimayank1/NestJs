import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    
    public getUserReq(req: Request){
        console.log('-----------------> REQ: ',req);
        return "Request printed succesffuly";
    }
}
