import { Component, OnInit } from '@angular/core';

export interface tasks {
  name: string;
  nr: number;
  anzahl: number;
  termin: string;
}
export interface companies {
  name: string;
  level: number;
  perc: string;
}

const tasks_data: tasks[] = [
  {nr: 123, name: 'Schoffler', anzahl: 54, termin: '16.07.2018'},
  {nr: 2234, name: 'Basch', anzahl: 100, termin: '16.07.2018'},
  {nr: 52353, name: 'Siemons', anzahl: 33, termin: '16.07.2018'},
  {nr: 43, name: 'AFG', anzahl: 150, termin: '17.07.2018'},
  {nr: 635, name: 'Grunbig', anzahl: 85, termin: '17.07.2018'},
  {nr: 64436, name: 'Aubi', anzahl: 90, termin: '18.07.2018'},
  {nr: 7123, name: 'Bnw', anzahl: 25, termin: '18.07.2018'},
  {nr: 8665, name: 'Leobi', anzahl: 50, termin: '18.07.2018'},
  {nr: 92347, name: 'Nam', anzahl: 60, termin: '19.07.2018'},
  {nr: 10433, name: 'Baunüller', anzahl: 45, termin: '19.07.2018'},
];
const companies_data: companies[] = [
  {name: 'Schoffler', level: 54, perc: '20%'},
  {name: 'Basch', level: 100, perc: '26%'},
  {name: 'Siemons', level: 33, perc: '30%'},
  {name: 'AFG', level: 150, perc: '38%'},
  {name: 'Grunbig', level: 85, perc: '45%'},
  {name: 'Aubi', level: 90, perc: '60%'},
  {name: 'Bnw', level: 25, perc: '77%'},
  {name: 'Leobi', level: 50, perc: '89%'},
  {name: 'Nam', level: 60, perc: '94%'},
  {name: 'Baunüller', level: 45, perc: '97%'},
];

@Component({
  selector: 'app-purchase-department-view',
  templateUrl: './purchase-department-view.component.html',
  styleUrls: ['./purchase-department-view.component.css']
})
export class PurchaseDepartmentViewComponent implements OnInit {
  displayedColumns: string[] = ['nr', 'name', 'anzahl', 'termin'];
  dataSource = tasks_data;
  displayedColumns2: string[] = ['name', 'level', 'perc'];
  dataSource2 = companies_data;
  constructor() { }

  ngOnInit() {
  }

}
