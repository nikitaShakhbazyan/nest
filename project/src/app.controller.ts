import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
  @Post('sendHello')
  sendHello(@Body() body: { name: string }): string {
    return this.appService.sendHello(body.name);
  }
}
