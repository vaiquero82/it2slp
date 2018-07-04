import { ServiceTask } from './servicetask';

export class Engineer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  tasklist: ServiceTask[] = [];
}
