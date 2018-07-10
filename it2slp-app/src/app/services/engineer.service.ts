import { Injectable } from '@angular/core';
import { Engineer } from './engineer';
import { ServiceTask } from './servicetask';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  t11: ServiceTask = {
    id: 1,
    datetime: new Date(),
    time: '19:30',
    task: 'Kartusche 5 Wechseln',
    done: 'done',
    display: 'keyboard_arrow_down'
  };
  t12: ServiceTask = {
    id: 2,
    datetime: Date.now(),
    time: '13:00',
    task: 'Kartusche 4 Wechseln',
    done: 'error',
    display: 'keyboard_arrow_down'
  };
  t13: ServiceTask = {
    id: 3,
    datetime: Date.now(),
    time: '17:00',
    task: 'Kartusche 2 Wechseln',
    done: 'hourglass_empty',
    display: 'keyboard_arrow_down'
  };

  tasklist1 = [this.t11, this.t12];
  tasklist2 = [this.t11, this.t12];


  e1: Engineer = {
    id : 1,
    firstName : 'Stefan',
    lastName : 'Schmidt',
    email: 'Stefan.Schmidt@race.de',
    tasklist:  this.tasklist1
    };

    e2: Engineer = {
      id : 2,
      firstName : 'Max',
      lastName : 'Muster',
      email: 'Max.Muster@race.de',
      tasklist : this.tasklist2,
      };

  engineers: Engineer[] = [];
  constructor() {
    this.engineers[0] = this.e1;
    this.engineers[1] = this.e2;
  }

  getEngineers(): Engineer[] {
    return this.engineers;
  }
}
