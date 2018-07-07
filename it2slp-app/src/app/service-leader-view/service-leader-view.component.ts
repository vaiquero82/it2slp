import { Component, OnInit, AfterViewInit, Input, AfterViewChecked, ViewChild } from '@angular/core';

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

    engineers: Engineer[];
    selected = null;
    selectedKartusche = null;
    myDate = new Date();
    timevalue = '19:00';
    data;
    dataSchmierstelleLinearAchseX: any = undefined;
    dataSchmierstelleLinearAchseY: any = undefined;
    dataSchmierstelleRundtisch: any = undefined;
    // gaugeChartDataX;
    gaugeChartDataY;
    gaugeChartDataRundtisch ;

    @ViewChild('cchart') cchart;

    gaugeChartDataX =  {
      chartType: 'Gauge',
      dataTable: [
        ['Label', 'Value'],
        ['Value', 2.5]
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

   getGaugeChartData(setValue) {
    const gaugeChartData =  {
      chartType: 'Gauge',
      dataTable: [
        ['Label', 'Value'],
        ['Value', setValue]
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
    return gaugeChartData;
  }

  ngOnInit() {
    this.getAllData();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
  }

  ngAfterViewChecked(): void {
    if (this.dataSchmierstelleLinearAchseX !== undefined
      && this.dataSchmierstelleLinearAchseY !== undefined
      && this.dataSchmierstelleRundtisch !== undefined) {
        // this.cchart.wrapper.draw();
       // console.log(this.cchart.wrapper);
       // this.redrawAll();
        return;
      }

    if (this.dataSchmierstelleLinearAchseX === undefined
      || this.dataSchmierstelleLinearAchseY === undefined
      || this.dataSchmierstelleRundtisch === undefined) {
      } else {
      let index = this.getIndex(this.dataSchmierstelleLinearAchseX);
      this.gaugeChartDataX = this.getGaugeChartData(this.dataSchmierstelleLinearAchseX[index].werte.CURRENTTANKLEVEL);
      index = this.getIndex(this.dataSchmierstelleLinearAchseY);
      this.gaugeChartDataY = this.getGaugeChartData(this.dataSchmierstelleLinearAchseY[index].werte.CURRENTTANKLEVEL);
      index = this.getIndex(this.dataSchmierstelleRundtisch);
      this.gaugeChartDataRundtisch = this.getGaugeChartData(this.dataSchmierstelleRundtisch[index].werte.CURRENTTANKLEVEL);
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

redrawAll() {
 // let dataTable = this.cchart.wrapper.getDataTable();
  // force a redraw
  this.gaugeChartDataX.dataTable['Value'] = 5;
  console.log(this.cchart);
 // this.cchart.draw();

 // this.cchart.redraw();
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

getIndex(obj) {
  const i = obj.length - 1;
  return i;
}

}


/*export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}*/
