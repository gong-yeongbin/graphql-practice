import { JobEntity } from '@/job/domain/entities';
import { CreateJobDto } from '@/job/dto';

export interface IJob {
  create(job: CreateJobDto): Promise<JobEntity>;
  findMany(): Promise<JobEntity[]>;
  findOne(id: number): Promise<JobEntity | null>;
}
