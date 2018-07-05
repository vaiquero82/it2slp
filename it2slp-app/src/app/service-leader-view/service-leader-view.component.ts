import { Component, OnInit, AfterViewInit, Input, AfterViewChecked } from '@angular/core';

// tslint:disable-next-line:import-blacklist
// import { Observable, Subscriber} from 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EngineerService } from '../services/engineer.service';
import { Engineer } from '../services/engineer';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-service-leader-view',
  templateUrl: './service-leader-view.component.html',
  styleUrls: ['./service-leader-view.component.css']
})
export class ServiceLeaderViewComponent implements OnInit, AfterViewChecked {
  /*tiles: Tile[] = [
    {text: 'One', cols: 9, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 9, rows: 6, color: 'lightgreen'},
    {text: '<google-chart class="gauge" [data]="gaugeChartData"></google-chart>', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'},
  ];*/


    engineers: Engineer[];
    selected = null;
    selectedKartusche = null;
    myDate = new Date();
    timevalue = '19:00';
    data;
    dataSchmierstelleLinearAchseX: any = undefined;
    dataSchmierstelleLinearAchseY: any = undefined;
    dataSchmierstelleRundtisch: any = undefined;


  title = 'line-chart';
  options: Object;
  chart;
  c;
  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000]
    ],
    options: {
      title: 'Population of Largest U.S. Cities',
       /* chartArea: {width: '70%'},*/

       width: 600, height: 300,
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
    },
  };

  public gaugeChartData =  {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Value'],
      ['Value', 1.78]
    ],
    options: {
      animation: {easing: 'out'},
      width: 120, height: 120,
      greenFrom: 1, greenTo: 4,
      minorTicks: 5,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
    }
  };

  lineChart = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {
      title: 'Tasks',
      width: 600, height: 300,
    },


  };

  public timelineChartData =  {
    chartType: 'Timeline',
    dataTable: [
      ['Name', 'From', 'To'],
      [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ],
    options: {
      title: 'Countries', width: 600, height: 300, allowHtml: true,
    }
 };


  constructor(private EngService: EngineerService, private dataService: DataService) {
    this.engineers = EngService.getEngineers();
   }

  ngOnInit() {
    this.getAllData();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

  }

  ngAfterViewChecked(): void {
    if (this.dataSchmierstelleLinearAchseX === undefined) {
    } else {

    }
  }

  doMail(engineer: Engineer) {
    const time = this.timevalue.split(':');
    this.myDate.setHours(Number(time[0]));
    this.myDate.setMinutes(Number(time[1]));
    console.log(this.myDate);

    // tslint:disable-next-line:max-line-length
    location.href = 'mailto:' + engineer.email + '?subject=Service Task&body=Kartusche ' + this.selectedKartusche + ' bis spätestens ' + this.myDate + ' .';
}

getAllData() {
  try {
    this.dataService.getDataX()
      .subscribe(resp => {
        this.dataSchmierstelleLinearAchseX = resp;
      },
        error => {
          console.log(error, 'error');
        });
        this.dataService.getDataY()
        .subscribe(resp => {
          this.dataSchmierstelleLinearAchseY = resp;
        },
          error => {
            console.log(error, 'error');
          });
          this.dataService.getDataRundtisch()
          .subscribe(resp => {
            this.dataSchmierstelleRundtisch = resp;
          },
            error => {
              console.log(error, 'error');
            });
  } catch (e) {
    console.log(e);
  }
}



}


/*export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}*/
