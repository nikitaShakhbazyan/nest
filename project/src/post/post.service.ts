import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'prisma/prisma-client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async createPost(
    title: string,
    content: string,
    authorId: number,
  ): Promise<Post> {
    const post = await this.prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });
    return post;
  }
  async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }
  async getPostById(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id: id },
    });
  }
}
