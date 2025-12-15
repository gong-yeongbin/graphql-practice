import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IUser } from '@/user/domain/interfaces';
import { CreateUserDto } from '@/user/dto';
import { UserEntity } from '@/user/domain/entities';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserRepository implements IUser {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.prismaService.user.create({ data: user });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
