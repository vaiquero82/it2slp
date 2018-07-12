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
    task: 'Maschine 3 Kartusche 5 wechseln',
    done: 'done',
    display: 'keyboard_arrow_down'
  };
  t12: ServiceTask = {
    id: 2,
    datetime: Date.now(),
    time: '13:00',
    task: 'Maschin 1 Kartusche 1 wechseln',
    done: 'error',
    display: 'keyboard_arrow_down'
  };
  t14: ServiceTask = {
    id: 4,
    datetime: Date.now(),
    time: '15:30',
    task: 'Maschine 1 Kartusche 2 wechseln',
    done: 'hourglass_empty',
    display: 'keyboard_arrow_down'
  };
  t15: ServiceTask = {
    id: 5,
    datetime: Date.now(),
    time: '17:00',
    task: 'Maschine 2 Kartusche 3 wechseln',
    done: 'hourglass_empty',
    display: 'keyboard_arrow_down'
  };
  t16: ServiceTask = {
    id: 6,
    datetime: Date.now(),
    time: '12:00',
    task: 'Maschine 2 Kartusche 1 wechseln',
    done: 'hourglass_empty',
    display: 'keyboard_arrow_down'
  };
  t17: ServiceTask = {
    id: 7,
    datetime: Date.now(),
    time: '14:00',
    task: 'Maschine 3 Kartusche 1 wechseln',
    done: 'hourglass_empty',
    display: 'keyboard_arrow_down'
  };


  tasklist1 = [this.t11, this.t12, this.t14, this.t15, this.t16, this.t17];
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
