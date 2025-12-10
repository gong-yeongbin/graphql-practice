import { Job } from './job.model';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';
import { CreateJobInput } from './dto/create-job.input';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => Job, { name: 'job' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jobService.findOne(id);
  }

  @Query(() => [Job], { name: 'jobs' })
  findAll(): Job[] {
    return this.jobService.findAll();
  }

  @Mutation(() => Job)
  createJob(@Args('input') input: CreateJobInput): Job {
    return this.jobService.create(input);
  }
}
