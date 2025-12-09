import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'user' })
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserInput): User {
    return this.userService.create(input);
  }
}
