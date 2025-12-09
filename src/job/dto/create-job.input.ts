import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateJobInput {
  @Field()
  jobName: string;

  @Field(() => Int)
  salary: number;
}
