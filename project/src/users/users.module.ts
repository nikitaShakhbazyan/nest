import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'prisma/prisma-client';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
