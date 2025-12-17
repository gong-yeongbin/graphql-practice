import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from '@/user/use-case';
import { CreateUserInput } from '@/user/dto/request';
import { User } from '@/user/dto/response';
import { Job } from '@/job/dto/response';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @ResolveField(() => [Job])
  async jobs(@Parent() user: User) {
    return await this.userService.findJobs(user.id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return await this.userService.create(input);
  }
}
