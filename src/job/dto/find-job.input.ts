import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class FindJobInput {
  @Field(() => Int)
  id: number;
}
