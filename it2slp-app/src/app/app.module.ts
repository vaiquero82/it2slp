import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StorageComponent } from './storage/storage.component';
import { MainviewComponent } from './mainview/mainview.component';
import {MatButtonModule,
        MatCheckboxModule,
        MatToolbar,
        MatToolbarBase,
        MatToolbarModule,
        MatToolbarRow,
        MatIcon,
        MatTabsModule,
        } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


export declare let require: any;
// const AWS = require('aws-sdk/dist/aws-sdk-react-native');

@NgModule({
  declarations: [
    MatIcon,
    AppComponent,
    TopBarComponent,
    LineChartComponent,
    StorageComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    Ng2GoogleChartsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
