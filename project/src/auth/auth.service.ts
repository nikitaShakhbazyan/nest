import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registration(username: string, password: string) {
    const existingUser = this.userService.findUsername(username);
    if (existingUser) {
      throw new UnauthorizedException(
        'There s already is a user with such username',
      );
    }
    const user = await this.userService.createUser(username, password);
    return { message: 'User successfully registered', user };
  }
}
