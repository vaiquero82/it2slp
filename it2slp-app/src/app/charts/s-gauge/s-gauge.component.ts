import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked  } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { DataService } from '../../services/data.service';
import { Datetime } from '../../services/datetime';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-s-gauge',
  templateUrl: './s-gauge.component.html',
  styleUrls: ['./s-gauge.component.css']
})
export class SGaugeComponent implements OnInit {

  chart: Highcharts.ChartObject;
  @ViewChild('chartTarget') chartTarget: ElementRef;
  loading = false;
  gauge: object;
  constructor() {}
  ngOnInit() {
    this.gauge = {
      chart: {
        type: 'solidgauge',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
      },
      credits: {
        enabled: false
      },

       title: {
        text: null
      },

      pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'

        }
      },

      tooltip: {
        enabled: false
      },

      // the value axis
      yAxis: {
        stops: [
          [0.1, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70,
          text: 'Füllstand in %'
        },
        labels: {
          y: 16
        },
        min: 0,
        max: 200,
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      series: [{
        name: 'Speed',
        data: [80],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y}</span><br/>' +
                   '<span style="font-size:12px;color:silver">km/h</span></div>'
        },
        tooltip: {
            valueSuffix: ' km/h'
        }
    }]
    };
  }


}
