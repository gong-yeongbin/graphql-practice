import { user } from '@prisma/client';

export class UserEntity implements user {
  name: string;
  id: number;
  email: string | null;
}
