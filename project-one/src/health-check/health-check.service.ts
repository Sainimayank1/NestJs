import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
    
    public serverHealth(){
        return "Server is running fine..."
    }
}
