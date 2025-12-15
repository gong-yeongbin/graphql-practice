import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from '@/user/dto/request';
import { USER_REPOSITORY } from '@/user/domain/constants';
import { IUser } from '@/user/domain/interfaces';
import { CreateUserDto } from '@/user/dto';
import { plainToInstance } from 'class-transformer';
import { User } from '@/user/dto/response';

@Injectable()
export class UserService {
  private user: User[] = [];
  private idSeq: number = 1;

  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUser,
  ) {}

  findAll(): User[] {
    return this.user;
  }

  async create(input: CreateUserInput): Promise<User> {
    const createUserDto = plainToInstance(CreateUserDto, input);

    const user = await this.userRepository.create(createUserDto);
    return plainToInstance(User, user);
  }
}
