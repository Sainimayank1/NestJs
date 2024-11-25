import { Module } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, LoggerService]
})
export class UserModule { }
