import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '@/user/use-case';
import { CreateUserInput } from '@/user/dto/request';
import { User } from '@/user/dto/response';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return await this.userService.create(input);
  }
}
