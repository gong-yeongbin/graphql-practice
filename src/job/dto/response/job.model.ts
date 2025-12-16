import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Job {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
