import {
  Body,
  Get,
  Post,
  Controller,
  UseGuards,
  Req,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.gurad';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    console.log('Body received:', body);
    const { username, password } = body;
    return this.authService.registration(username, password);
  }
  @Post('login')
  login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(username, password);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Put('refresh')
  refreshName(@Req() req: Request, @Body('username') username: string) {
    const user = req.user as { userId: number; username: string };
    return this.authService.newUsername(user.userId, username);
  }
}
