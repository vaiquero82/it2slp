import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import 'highcharts/adapters/standalone-framework.src';
// tslint:disable-next-line:import-blacklist
// import { Observable, Subscriber} from 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  title = 'line-chart';
  options: Object;
  chart;
  c;

  constructor() {

    var rect = document.getElementById('graphsId').getBoundingClientRect();
    var w = rect.width * 0.5;
    var h = rect.height * 0.5;

    var data1 = [ 1, 2, 3, 4, 5 ];
    var data2 = [ 11, 21, 31, 41, 51 ];
    var data3 = [ 111, 211, 311, 411, 511 ];

    this.options = {
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      chart: {
        type: 'spline',
        height: h,
        width: w
      },
      title: {
        text: 'Schmiermittelfüllstand'
      },
      xAxis: {
        type: 'datetime',
        labels: {
          overflow: 'justify',
          enabled: false
        }
      },
      yAxis: {
        tickInterval: 20,
        title: {
          text: '%'
        },
        min: 0,
        max: 100,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
          from: 0,
          to: 19,
          color: 'rgba(255, 0, 0, 1)',
          label: {
            text: 'too Low',
            style: {
              color: '#606060'
            }
          }
        }, { // Light breeze
          from: 20,
          to: 39,
          color: 'rgba(255, 140, 0, 1)',
          label: {
            text: 'change me',
            style: {
              color: '#606060'
            }
          }
        }, { // Gentle breeze
          from: 40,
          to: 59,
          color: 'rgba(255, 255, 0, 1)',
          label: {
            text: 'i can work',
            style: {
              color: '#606060'
            }
          }
        }, { // Gentle breeze
          from: 60,
          to: 79,
          color: 'rgba(168, 255, 0, 1)',
          label: {
            text: 'almost full',
            style: {
              color: '#606060'
            }
          }
        }, { // Gentle breeze
          from: 80,
          to: 100,
          color: 'rgba(0, 136, 0, 1)',
          label: {
            text: 'Full',
            style: {
              color: '#606060'
            }
          }
        }]
      },
      tooltip: {
        enabled: false,
        valueSuffix: 'dpi'
      },
      plotOptions: {
        spline: {
          lineWidth: 3,
          states: {
            hover: {
              enabled: false
            }
          },
          marker: {
            enabled: false
          },
          pointInterval: 3600000, // one hour
          pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
        }
      },
      series: [{
        name: 'Kartusche 1',
        data: data1,
        color: 'rgba(128, 0, 128, 1)'
      }, {
        name: 'Kartusche 2',
        data: data2,
        color: 'rgba(61, 124, 183, 1)'
      }, {
        name: 'KArtusche 3',
        data: data3,
        color: 'rgba(0, 0, 0, 1)'
      }],
      navigation: {
        menuItemStyle: {
          fontSize: '10px'
        }
      }/*,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 600
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }*/
    };

   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var rect = document.getElementById('graphsId').getBoundingClientRect();
    var w = rect.width * 0.5;
    var h = rect.height * 0.5;
    this.chart.setSize(w, h);
    //setInterval(this.onChange.bind(this),1000);
  }

  saveChart(chart) {
    this.chart = chart;
    this.c = chart.series;
  }

  public onChange(dpiRes): void {
    var series = this.chart.series;

    var arrD = [2, 3];
    var arrM = [4, 5];
    var arrO = [7, 8];



    series[0].setData(arrD, false, false, true);

    series[1].setData(arrM, false, false, true);
    series[2].setData(arrO, false, false, true);
    this.chart.redraw();
  }
}
