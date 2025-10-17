import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(`[LOG]: ${message}`);
    console.log('Additional log info');
  }
}
