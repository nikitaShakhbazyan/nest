import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'defaultSecretKey',
      signOptions: { expiresIn: '1m' },
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy, LoggerService],
  controllers: [AuthController],
})
export class AuthModule {}
