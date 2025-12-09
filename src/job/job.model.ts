import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Job {
  @Field(() => Int)
  id: number;

  @Field()
  jobName: string;

  @Field(() => Int)
  salary: number;
}
