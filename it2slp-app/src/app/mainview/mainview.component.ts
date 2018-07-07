import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as AWS from 'aws-sdk';
import { utils } from 'protractor';
import * as inspect from 'util-inspect';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { DataService } from '../services/data.service';
import { Datetime } from './datetime';





@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit, AfterViewChecked {


  @Input() selectedView: String;
  predictiveValue = 0.0;
  computedPredictiveValue = 0.0;
  public c: AWS.Config;
  myDate = new Date();
  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  dataSchmierstelleLinearAchseX;
  dataSchmierstelleLinearAchseY;
  dataSchmierstelleRundtisch;
  dataSchmierstelleLinearAchseXCurrenttanklevel = [];
  dataSchmierstelleLinearAchseYCurrenttanklevel = [];
  dataSchmierstelleRundtischCurrenttanklevel = [];

  yesterday = new Date(Date.now() - (24 * 60 * 60 * 1000));
  minDate = this.yesterday;
  maxDate = Date.now();

  constructor(private dataService: DataService) {
// import entire SDK
// const inspect = require('util-inspect');



  }

  ngOnInit() {
    this.getAllData();






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
          pointInterval: 3600000, // one hour
          // pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
          pointStart: Date.UTC(2016, 12, 16, 13, 44, 19)
        }
      },
      series: [{
        name: 'X',
        data: [2, 2, 2], // this.dataSchmierstelleLinearAchseXCurrenttanklevel,
        color: 'rgba(128, 0, 128, 1)'
      }, {
        name: 'Y',
        data: [2, 2, 2], // this.dataSchmierstelleLinearAchseYCurrenttanklevel,
        color: 'rgba(61, 124, 183, 1)'
      }, {
        name: 'Rundtisch',
        data: [2, 2, 2], // this.dataSchmierstelleRundtischCurrenttanklevel,
        color: 'rgba(0, 0, 0, 1)'
      }],
      navigation: {
        menuItemStyle: {
          fontSize: '10px'
        }
      }
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }



  savePrediction(err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      this.predictiveValue =  data.Prediction.predictedValue;
      this.computePrediction(this.predictiveValue);
    }
  }

  computePrediction(x) {
    this.computedPredictiveValue =  Math.pow((x - (x * 0.4)), Math.exp(1));

  }


  ngAfterViewChecked(): void {

  }

  getAllData() {
    try {
      this.dataService.getDataX()
        .subscribe(resp => {
          this.dataSchmierstelleLinearAchseX = resp;
          this.dataSchmierstelleLinearAchseX.forEach(element => {
            this.dataSchmierstelleLinearAchseXCurrenttanklevel.push(element.werte.CURRENTTANKLEVEL);
          });
        },
          error => {
            console.log(error, 'error');
          });
          this.dataService.getDataY()
          .subscribe(resp => {
            this.dataSchmierstelleLinearAchseY = resp;
            this.dataSchmierstelleLinearAchseY.forEach(element => {
              this.dataSchmierstelleLinearAchseYCurrenttanklevel.push(element.werte.CURRENTTANKLEVEL);
            });
          },
            error => {
              console.log(error, 'error');
            });
            this.dataService.getDataRundtisch()
            .subscribe(resp => {
              this.dataSchmierstelleRundtisch = resp;
              this.dataSchmierstelleRundtisch.forEach(element => {
                this.dataSchmierstelleRundtischCurrenttanklevel.push(element.werte.CURRENTTANKLEVEL);
              });
            },
              error => {
                console.log(error, 'error');
              });
    } catch (e) {
      console.log(e);
    }

  }

  ngAfterViewInit() {
    setInterval(this.onChange.bind(this), 4000);
  }
  public onChange(dpiRes): void {
    console.log('Start');
    //const series = this.chart.series;
    const series = this.chart.series;
    let arrX: any[] = [];
    //arrX.push(this.chart.series[0].data[0].y);
    let arrY: any[] = [];
    //arrY.push(this.chart.series[1].data[0].y);
    let arrR: any[] = [];
    //arrR.push(this.chart.series[2].data[0].y);
        //const date2 = new Date('1995-12-17T03:24:00');
    this.printDate(this.dataSchmierstelleLinearAchseX[0]);
    for (let j = 0; j < this.dataSchmierstelleLinearAchseXCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleLinearAchseXCurrenttanklevel[j] !==  undefined) {
        let el: any[] = [];
        const dateObj = this.printDate(this.dataSchmierstelleLinearAchseX[j]);
        const date2 = new Date( dateObj.year + '-' + dateObj.month + '-' + dateObj.day + 'T' +
                              dateObj.hour + ':' + dateObj.minute + ':' + dateObj.second);
        el.push(date2);
        el.push(parseFloat(this.dataSchmierstelleLinearAchseXCurrenttanklevel[j]));
        arrX.push(el);
      }
    }
    for (let j = 0; j < this.dataSchmierstelleLinearAchseYCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleLinearAchseYCurrenttanklevel[j] !==  undefined) {
        let el: any[] = [];
        const dateObj = this.printDate(this.dataSchmierstelleLinearAchseY[j]);
        const date2 = new Date( dateObj.year + '-' + dateObj.month + '-' + dateObj.day + 'T' +
                              dateObj.hour + ':' + dateObj.minute + ':' + dateObj.second);
        el.push(date2);
        el.push(parseFloat(this.dataSchmierstelleLinearAchseYCurrenttanklevel[j]));
        arrY.push(el);
      }
    }
    for (let j = 0; j < this.dataSchmierstelleRundtischCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleRundtischCurrenttanklevel[j] !==  undefined) {
        let el: any[] = [];
        const dateObj = this.printDate(this.dataSchmierstelleRundtisch[j]);
        const date2 = new Date( dateObj.year + '-' + dateObj.month + '-' + dateObj.day + 'T' +
                              dateObj.hour + ':' + dateObj.minute + ':' + dateObj.second);
        el.push(date2);
        el.push(parseFloat(this.dataSchmierstelleRundtischCurrenttanklevel[j]));
        arrR.push(el);
      }
    }

    series[0].setData(arrX, false, false, true);

    series[1].setData(arrY, false, false, true);
    series[2].setData(arrR, false, false, true);
    this.chart.redraw();
   // console.log(this.dataSchmierstelleLinearAchseX[0]);
    // console.log("1:", series[0].data[0]);

  }


  printDate(element) {
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
}
