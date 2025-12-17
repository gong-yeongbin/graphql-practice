import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IUser } from '@/user/domain/interfaces';
import { CreateUserDto } from '@/user/dto';
import { UserEntity } from '@/user/domain/entities';
import { PrismaService } from '@/prisma/prisma.service';
import { JobEntity } from '@/job/domain/entities';

@Injectable()
export class UserRepository implements IUser {
  constructor(private readonly prismaService: PrismaService) {}

  async findJobs(id: number): Promise<JobEntity[]> {
    try {
      return await this.prismaService.job.findMany({
        where: { user: { some: { id } } },
      });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async create(user: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.prismaService.user.create({ data: user });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findMany(): Promise<UserEntity[]> {
    try {
      return await this.prismaService.user.findMany();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
