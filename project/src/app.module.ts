import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
@Module({
  imports: [AuthModule, UsersModule, PostModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
