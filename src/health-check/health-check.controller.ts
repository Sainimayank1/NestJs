import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';

@Controller('healthCheck')
export class HealthCheckController {
    constructor(private healthCheckService: HealthCheckService){}

    @Get()
    healthCheck(): string{
        return this.healthCheckService.serverHealth();
    }
}
