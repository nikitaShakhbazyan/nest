import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {}
  getHello(): string {
    return 'Hello World!';
  }
  getGoodbye(): string {
    this.logger.log('getGoodbye called');
    return 'Goodbye Worild!';
  }
  sendHello(name: string): string {
    this.logger.log(`sendHello called with name: ${name}`);
    return `Hello, ${name}!`;
  }
}
