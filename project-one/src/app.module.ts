import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health-check/health-check.module';
import { UserModule } from './user/user.module';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [HealthCheckModule, UserModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
