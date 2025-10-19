import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaService } from 'prisma/prisma-client';
import { PostController } from './post.controller';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PrismaService, PostService],
})
export class PostModule {}
