import { UserEntity } from '@/user/domain/entities';
import { CreateUserDto } from '@/user/dto';

export interface IUser {
  create(user: CreateUserDto): Promise<UserEntity>;
}
