import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

interface JwtPayload {
  userId: number;
  username: string;
}
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
  async login(username: string, password: string) {
    const user = this.userService.findUsername(username);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { message: 'Login successful', access_token: token };
  }
  async verify(token: string): Promise<JwtPayload> {
    return this.jwtService.verifyAsync(token);
  }
}
