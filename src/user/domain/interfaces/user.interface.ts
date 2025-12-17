import { UserEntity } from '@/user/domain/entities';
import { CreateUserDto } from '@/user/dto';
import { JobEntity } from '@/job/domain/entities';

export interface IUser {
  create(user: CreateUserDto): Promise<UserEntity>;
  findMany(): Promise<UserEntity[]>;
  findJobs(id: number): Promise<JobEntity[]>;
}
