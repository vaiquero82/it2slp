import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { merge } from 'rxjs/operators';
import * as AWS from 'aws-sdk';
import { utils } from 'protractor';
import * as inspect from 'util-inspect';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { DataService } from '../services/data.service';
import { Datetime } from '../services/datetime';
import { forkJoin } from 'rxjs/observable/forkJoin';





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
  loading = false;
  chart: Highcharts.ChartObject;
  dataSchmierstelleLinearAchseX;
  dataSchmierstelleLinearAchseY;
  dataSchmierstelleRundtisch;
  dataSchmierstelleLinearAchseXCurrenttanklevel = [];
  dataSchmierstelleLinearAchseYCurrenttanklevel = [];
  dataSchmierstelleRundtischCurrenttanklevel = [];




  constructor(private dataService: DataService) {
// import entire SDK
// const inspect = require('util-inspect');



  }

  ngOnInit() {
    this.loading = true;
    console.log('Loading');
    this.getAllData();
    setTimeout(this.onClick.bind(this), 1500);
  }

  onClick() {
    console.log('onclick()', this.dataSchmierstelleLinearAchseX[0]);
    const dateObj = this.dataSchmierstelleLinearAchseX[0]['datum'];
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
        text: null
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
        tickInterval: 10,
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
          pointStart: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second)
          // pointStart: Date.UTC(2016, 12, 16, 13, 44, 19)
        }
      },
      series: [{
        name: 'X',
        data: [{
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: 2,
        }], // this.dataSchmierstelleLinearAchseXCurrenttanklevel,
        color: 'rgba(128, 0, 128, 1)'
      }, {
        name: 'Y',
        data: [{
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: 2,
        }], // this.dataSchmierstelleLinearAchseYCurrenttanklevel,
        color: 'rgba(61, 124, 183, 1)'
      }, {
        name: 'Rundtisch',
        data: [{
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: 2,
        }], // this.dataSchmierstelleRundtischCurrenttanklevel,
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
      const f = this.dataService.getDataX();
      const s = this.dataService.getDataY();
      const t = this.dataService.getDataRundtisch();
      forkJoin([f, s, t]).subscribe(results => {
        this.sleep(1000);

        this.dataSchmierstelleLinearAchseX = results[0];
        this.dataSchmierstelleLinearAchseY = results[1];
        this.dataSchmierstelleRundtisch = results[2];
        this.saveData(results);
        this.dataSchmierstelleLinearAchseX.forEach(element => {
          this.dataSchmierstelleLinearAchseXCurrenttanklevel.push(element.werte.CURRENTTANKLEVEL);
        });
        this.dataSchmierstelleLinearAchseY.forEach(element => {
          this.dataSchmierstelleLinearAchseYCurrenttanklevel.push(element.werte.CURRENTTANKLEVEL);
        });
        this.dataSchmierstelleRundtisch.forEach(element => {
          this.dataSchmierstelleRundtischCurrenttanklevel.push(element.werte.CURRENTTANKLEVEL);
        });
        this.loading = false;
        console.log('fertisch');
      });

        } catch (e) {
      console.log(e);
        }
  }


  saveData(results) {
    this.dataSchmierstelleLinearAchseX = results[0];
    this.dataSchmierstelleLinearAchseY = results[1];
    this.dataSchmierstelleRundtisch = results[2];
  }

  chooseAll(): void {
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
      // if (j === this.dataSchmierstelleLinearAchseXCurrenttanklevel.length - 1) {
      //   console.log(this.dataSchmierstelleLinearAchseX[j]['datum']);
      // }
    }
    for (let j = 0; j < this.dataSchmierstelleLinearAchseYCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleLinearAchseYCurrenttanklevel[j] !==  undefined) {
        const dateObj = this.getDateFromJSON(this.dataSchmierstelleLinearAchseY[j]);
        const el2 = {
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: parseFloat(this.dataSchmierstelleLinearAchseYCurrenttanklevel[j]),
        };
        arrY.push(el2);
      }
      // if (j === this.dataSchmierstelleLinearAchseYCurrenttanklevel.length - 1) {
      //   console.log(this.dataSchmierstelleLinearAchseY[j]['datum']);
      // }
    }
    for (let j = 0; j < this.dataSchmierstelleRundtischCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleRundtischCurrenttanklevel[j] !==  undefined) {
        const dateObj = this.getDateFromJSON(this.dataSchmierstelleRundtisch[j]);
        const el2 = {
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: parseFloat(this.dataSchmierstelleRundtischCurrenttanklevel[j]),
        };
        arrR.push(el2);
      }
      // if (j === this.dataSchmierstelleRundtischCurrenttanklevel.length - 1) {
      //   console.log(this.dataSchmierstelleRundtisch[j]['datum']);
      // }
    }

    series[0].setData(arrX, false, false, true);

    series[1].setData(arrY, false, false, true);
    series[2].setData(arrR, false, false, true);

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
    let x = Number(dtObj.month);
    x =  x - 1;
    dtObj.month = x;
   return dtObj;
  }



  chartInit() {

  }


  sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  chooseX() {
    if (this.chart.series === undefined) {
        this.onClick();
    }
    const series = this.chart.series;
    const arrX: any[] = [];
    const arrY: any[] = [];
    // arrY.push(this.chart.series[1].data[0].y);
    const arrR: any[] = [];
    for (let j = 0; j < this.dataSchmierstelleLinearAchseXCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleLinearAchseXCurrenttanklevel[j] !==  undefined) {
        const dateObj = this.getDateFromJSON(this.dataSchmierstelleLinearAchseX[j]);
        const el2 = {
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: parseFloat(this.dataSchmierstelleLinearAchseXCurrenttanklevel[j]),
        };
        arrX.push(el2);
      }
      // if (j === this.dataSchmierstelleLinearAchseXCurrenttanklevel.length - 1) {
      //   console.log(this.dataSchmierstelleLinearAchseX[j]['datum']);
      // }
    }

    series[0].setData(arrX, false, false, true);

    series[1].setData(arrY, false, false, true);
    series[2].setData(arrR, false, false, true);

    /*
    this.chart.update({
         plotOptions: {
            pointInterval: 3600000, // one hour
            // pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
            pointStart: Date.UTC(2016, 12, 16, 13, 44, 19)
      }
    });*/

    this.chart.redraw();
  }
  chooseY() {
    const series = this.chart.series;
    const arrX: any[] = [];
    const arrY: any[] = [];
    // arrY.push(this.chart.series[1].data[0].y);
    const arrR: any[] = [];
    for (let j = 0; j < this.dataSchmierstelleLinearAchseYCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleLinearAchseYCurrenttanklevel[j] !==  undefined) {
        const dateObj = this.getDateFromJSON(this.dataSchmierstelleLinearAchseY[j]);
        const el2 = {
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: parseFloat(this.dataSchmierstelleLinearAchseYCurrenttanklevel[j]),
        };
        arrY.push(el2);
      }
      // if (j === this.dataSchmierstelleLinearAchseYCurrenttanklevel.length - 1) {
      //   console.log(this.dataSchmierstelleLinearAchseY[j]['datum']);
      // }
    }

    series[0].setData(arrX, false, false, true);

    series[1].setData(arrY, false, false, true);
    series[2].setData(arrR, false, false, true);

    /*
    this.chart.update({
         plotOptions: {
            pointInterval: 3600000, // one hour
            // pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
            pointStart: Date.UTC(2016, 12, 16, 13, 44, 19)
      }
    });*/

    this.chart.redraw();
  }
  chooseR() {

    if (this.chart.series === undefined) {
      this.onClick();
  }
    const series = this.chart.series;
    const arrX: any[] = [];
    const arrY: any[] = [];
    // arrY.push(this.chart.series[1].data[0].y);
    const arrR: any[] = [];
    for (let j = 0; j < this.dataSchmierstelleRundtischCurrenttanklevel.length; j++) {
      if (this.dataSchmierstelleRundtischCurrenttanklevel[j] !==  undefined) {
        const dateObj = this.getDateFromJSON(this.dataSchmierstelleRundtisch[j]);
        const el2 = {
          x: Date.UTC(dateObj.year, dateObj.month, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second),
          y: parseFloat(this.dataSchmierstelleRundtischCurrenttanklevel[j]),
        };
        arrR.push(el2);
      }
      // if (j === this.dataSchmierstelleRundtischCurrenttanklevel.length - 1) {
      //   console.log(this.dataSchmierstelleRundtisch[j]['datum']);
      // }
    }

    series[0].setData(arrX, false, false, true);

    series[1].setData(arrY, false, false, true);
    series[2].setData(arrR, false, false, true);

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

  }
}
