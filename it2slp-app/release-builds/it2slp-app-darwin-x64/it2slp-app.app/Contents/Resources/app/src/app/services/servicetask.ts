import { Time } from '@angular/common';

export class ServiceTask {
  id: number;
  date: Date;
  time: Time;
  task: string;
  done: boolean;
}
