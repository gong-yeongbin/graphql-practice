import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Job } from '@/job/dto/response';
import { CreateJobInput } from '@/job/dto/request';
import { JOB_REPOSITORY } from '@/job/domain/constants';
import { IJob } from '@/job/domain/interfaces';
import { plainToInstance } from 'class-transformer';
import { CreateJobDto } from '@/job/dto';

@Injectable()
export class JobService {
  constructor(@Inject(JOB_REPOSITORY) private readonly jobRepository: IJob) {}

  async findOne(id: number): Promise<Job> {
    const job = await this.jobRepository.findOne(id);
    if (!job) throw new NotFoundException();
    return plainToInstance(Job, job);
  }

  async findAll(): Promise<Job[]> {
    const jobList = await this.jobRepository.findMany();
    return jobList.map((job) => plainToInstance(Job, job));
  }

  async create(input: CreateJobInput): Promise<Job> {
    const createJobDto = plainToInstance(CreateJobDto, input);
    const job = await this.jobRepository.create(createJobDto);
    return plainToInstance(Job, job);
  }
}
