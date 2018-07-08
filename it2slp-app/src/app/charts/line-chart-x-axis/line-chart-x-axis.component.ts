import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { merge } from 'rxjs/operators';
import * as AWS from 'aws-sdk';
import { utils } from 'protractor';
import * as inspect from 'util-inspect';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { DataService } from '../../services/data.service';
import { Datetime } from '../../services/datetime';
import { forkJoin } from 'rxjs/observable/forkJoin';



@Component({
  selector: 'app-line-chart-x-axis',
  templateUrl: './line-chart-x-axis.component.html',
  styleUrls: ['./line-chart-x-axis.component.css']
})
export class LineChartXAxisComponent  implements OnInit, AfterViewChecked {
  myDate = new Date();
  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  dataSchmierstelleLinearAchseX;
  dataSchmierstelleLinearAchseXCurrenttanklevel = [];

  yesterday = new Date(Date.now() - (24 * 60 * 60 * 1000));
  minDate = this.yesterday;
  maxDate = Date.now();


  constructor(private dataService: DataService) {
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    setInterval(this.onChange.bind(this), 4000);
  }

  ngOnInit() {
    this.getAllData();
    setTimeout(this.initChart.bind(this), 1000);
  }

  initChart() {
    console.log(this.getDateFromJSON(this.dataSchmierstelleLinearAchseX[0]));
    let dateObj = this.getDateFromJSON(this.dataSchmierstelleLinearAchseX[0]);
      const options: Highcharts.Options = {
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Kartuschenfüllstand'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats : {
          hour: '%I %p',
          minute: '%I:%M %p'
        },
        plotBands: [{
          color: 'red', // Color value
          zIndex: 100,
          from: 1434470400000, // Start of the plot band
          to: 1434830400000 // End of the plot band
        }],
        labels: {
          overflow: 'justify',
          enabled: true
        }
      },
      yAxis: {
        tickInterval: 20,
        title: {
          text: '%'
        },
        min: 0.0,
        max: 100.0,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
          from: 0,
          to: 33,
          color: 'rgba(255, 0, 0, 1)',
          zIndex: 1,
          label: {
            text: 'Bad',
            style: {
              color: '#606060'
            }
          }
        }, { // Gentle breeze
          from: 34,
          to: 67,
          color: 'rgba(255, 255, 0, 1)',
          zIndex: 1,
          label: {
            text: 'Medium',
            style: {
              color: '#606060'
            }
          }
        }, { // Gentle breeze
          from: 68,
          to: 100,
          color: 'rgba(0, 136, 0, 1)',
          zIndex: 1,
          label: {
            text: 'Strong',
            style: {
              color: '#606060'
            }
          }
        }]
      },
      tooltip: {
        enabled: true,
        valueSuffix: '% '
      },
      plotOptions: {
        spline: {
          lineWidth: 3,
          states: {
            hover: {
              enabled: true
            }
          },
          marker: {
            enabled: false
          },
          pointInterval: 14400000, // 3600000, // one hour
          pointStart: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second)
        //  pointStart: Date.UTC(2016, 12, 16, 13, 44, 19)
        }
      },
      series:

      [{
        name: 'Foo',


        data: [{
          x: Date.UTC(2016, 7, 29),
          y: 1.0
        }, {
          x: Date.UTC(2016, 9, 29),
          y: 2.0
        }, {
          x: Date.UTC(2016, 9, 29),
          y: 3.18
        }],
       }], /*
      series: [{
        name: 'X',
        data: [['1995-12-17T03:24:00', 1]], // this.dataSchmierstelleLinearAchseXCurrenttanklevel,
        color: 'rgba(128, 0, 128, 1)'
      }],*/
      navigation: {
        menuItemStyle: {
          fontSize: '10px'
        }
      }
    };
    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  ngAfterViewChecked(): void {

  }

  getAllData() {
    try {
      const f = this.dataService.getDataX();

      forkJoin([f]).subscribe(results => {
        this.dataSchmierstelleLinearAchseX = results[0];
        this.dataSchmierstelleLinearAchseX = results[0];
        this.dataSchmierstelleLinearAchseX.forEach(element => {
          this.dataSchmierstelleLinearAchseXCurrenttanklevel.push(element.werte.CURRENTTANKLEVEL);
        });
      });
        } catch (e) {
      console.log(e);
        }
  }




  public onChange(dpiRes): void {
    console.log('Start');
    // const series = this.chart.series;
    const series = this.chart.series;
    const arrX: any[] = [];
    // arrX.push(this.chart.series[0].data[0].y);
    const arrY: any[] = [];
    // arrY.push(this.chart.series[1].data[0].y);
    const arrR: any[] = [];
    // arrR.push(this.chart.series[2].data[0].y);
        // const date2 = new Date('1995-12-17T03:24:00');
    this.getDateFromJSON(this.dataSchmierstelleLinearAchseX[0]);
    for (let j = 0; j < this.dataSchmierstelleLinearAchseXCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleLinearAchseXCurrenttanklevel[j] !==  undefined) {
        const dateObj = this.getDateFromJSON(this.dataSchmierstelleLinearAchseX[j]);
        const el2 = {
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: parseFloat(this.dataSchmierstelleLinearAchseXCurrenttanklevel[j]),
        };
        arrX.push(el2);
      }
    }
    series[0].setData(arrX, false, false, true);

    /*
    this.chart.update({
         plotOptions: {
            pointInterval: 3600000, // one hour
            // pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
            pointStart: Date.UTC(2016, 12, 16, 13, 44, 19)
      }
    });*/

    this.chart.redraw();
   // console.log(this.dataSchmierstelleLinearAchseX[0]);
    // console.log("1:", series[0].data[0]);

  }


  getDateFromJSON(element) {
    const dtObj: Datetime = {
      day: element['datum'].substring(0, 2),
      month: element['datum'].substring(3, 5),
      year: element['datum'].substring(6, 10),
      hour: element['datum'].substring(11, 13),
      minute: element['datum'].substring(14, 16),
      second: element['datum'].substring(17, 19),
    };
   return dtObj;
  }


  sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

}
