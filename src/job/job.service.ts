import { Injectable } from '@nestjs/common';
import { Job } from './job.model';
import { CreateJobInput } from './dto/create-job.input';

@Injectable()
export class JobService {
  private job: Job[] = [];
  private idSeq: number = 1;

  findOne(id: number): Job | undefined {
    return this.job.find((j) => j.id === id);
  }

  findAll(): Job[] {
    return this.job;
  }

  create(input: CreateJobInput): Job {
    const job: Job = { id: this.idSeq++, ...input };
    this.job.push(job);
    return job;
  }
}
