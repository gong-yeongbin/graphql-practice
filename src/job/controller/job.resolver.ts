import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Job } from '@/job/dto/response';
import { JobService } from '@/job/use-case';
import { CreateJobInput } from '@/job/dto/request';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => Job, { name: 'job' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jobService.findOne(id);
  }

  @Query(() => [Job], { name: 'jobs' })
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Mutation(() => Job)
  async createJob(@Args('input') input: CreateJobInput): Promise<Job> {
    return this.jobService.create(input);
  }
}
