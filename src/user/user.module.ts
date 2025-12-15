import { Module } from '@nestjs/common';
import { UserResolver } from '@/user/controller';
import { UserService } from '@/user/use-case';
import { USER_REPOSITORY } from '@/user/domain/constants';
import { UserRepository } from '@/user/infrastructure';

@Module({
  providers: [
    UserResolver,
    UserService,
    { provide: USER_REPOSITORY, useClass: UserRepository },
  ],
})
export class UserModule {}
