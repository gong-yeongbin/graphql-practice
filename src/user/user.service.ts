import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  private user: User[] = [];
  private idSeq: number = 1;

  findAll(): User[] {
    return this.user;
  }

  create(input: CreateUserInput): User {
    const user: User = { id: this.idSeq++, ...input };
    this.user.push(user);
    return user;
  }
}
