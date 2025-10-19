import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

interface User {
  id: number;
  username: string;
  hashedPassword: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private id = 1;

  async createUser(username: string, password: string) {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const user = { id: this.id++, username, hashedPassword: hashedPassword };
    this.users.push(user);
    return user;
  }
  findUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  updateUsername(userId: number, newUsername: string) {
    const user = this.findById(userId);
    if (user) {
      user.username = newUsername;
    }
  }
}
