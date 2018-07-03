import { Injectable } from '@angular/core';
import { Engineer } from './engineer';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  e1: Engineer = {
    id : 1,
    firstName : 'Stefan',
    lastName : 'Schmidt',
    email: 'Stefan.Schmidt@race.de',
    tasklist : [],
    };

    e2: Engineer = {
      id : 2,
      firstName : 'Max',
      lastName : 'Muster',
      email: 'Max.Muster@race.de',
      tasklist : [],
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
