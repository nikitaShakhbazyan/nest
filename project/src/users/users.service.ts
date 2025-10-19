import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma-client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(username: string, password: string) {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
  }
  async findUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username: username },
    });
  }
  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }
  async updateUsername(id: number, newUsername: string) {
    const update = this.prisma.user.update({
      where: { id: id },
      data: { username: newUsername },
    });
    return update;
  }
}
