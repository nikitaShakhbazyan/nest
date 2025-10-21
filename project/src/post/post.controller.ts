import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from 'src/auth/jwt.gurad';
import type { Request } from 'express';
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createPost(
    @Body() body: { title: string; content: string; authorId: number },
    @Req() req: Request,
  ) {
    const authorId = (req.user as any).userId;
    const numericAuthorId = Number(authorId);
    const { title, content } = body;
    const post = await this.postService.createPost(
      title,
      content,
      numericAuthorId,
    );
    return { message: 'Post created successfully', post };
  }
  //   @UseGuards(JwtAuthGuard)
  @Get('all')
  async getAllPosts() {
    const posts = await this.postService.getAllPosts();
    return { message: 'List of all posts', posts };
  }
  @UseGuards(JwtAuthGuard)
  @Get('post/:id')
  async getPostById(@Param('id') id: number) {
    const post = await this.postService.getPostById(Number(id));
    return { message: 'Post details', post };
  }
}
