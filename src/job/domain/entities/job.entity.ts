import { job } from '@prisma/client';

export class JobEntity implements job {
  id: number;
  name: string;
}
