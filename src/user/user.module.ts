import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

// Created By
// nest g module user
@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
