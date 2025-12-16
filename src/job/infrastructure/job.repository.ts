import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IJob } from '@/job/domain/interfaces';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateJobDto } from '@/job/dto';
import { JobEntity } from '@/job/domain/entities';

@Injectable()
export class JobRepository implements IJob {
  constructor(private readonly prismaService: PrismaService) {}

  async create(job: CreateJobDto): Promise<JobEntity> {
    try {
      return await this.prismaService.job.create({ data: job });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findMany(): Promise<JobEntity[]> {
    try {
      return await this.prismaService.job.findMany();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(id: number): Promise<JobEntity | null> {
    try {
      return await this.prismaService.job.findUnique({ where: { id } });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
