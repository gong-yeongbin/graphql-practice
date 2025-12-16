import { Module } from '@nestjs/common';
import { JobResolver } from '@/job/controller';
import { JobService } from '@/job/use-case';
import { JOB_REPOSITORY } from '@/job/domain/constants';
import { JobRepository } from '@/job/infrastructure';

@Module({
  providers: [
    JobResolver,
    JobService,
    { provide: JOB_REPOSITORY, useClass: JobRepository },
  ],
})
export class JobModule {}
