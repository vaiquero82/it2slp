import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StorageComponent } from './storage/storage.component';
import { MainviewComponent } from './mainview/mainview.component';

import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export declare let require: any;

export function highchartsFactory() {

  //const hc = require('highcharts/highstock');
  //const dd = require('highcharts/modules/exporting');
  //dd(hc);
  const hc = require('highcharts');
  // var hcs = require('highcharts/highstock');
  const hcm = require('highcharts/highcharts-more');
  const exp = require('highcharts/modules/exporting');
  const hmp = require('highcharts/modules/heatmap');
  const sgc = require('highcharts/modules/solid-gauge.js');
  hcm(hc);
  exp(hc);
  hmp(hc);
  sgc(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LineChartComponent,
    StorageComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    ChartModule
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
