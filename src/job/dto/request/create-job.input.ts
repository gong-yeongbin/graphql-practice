import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateJobInput {
  @Field()
  name: string;
}
