import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

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
        MatIconModule,
        MatTabsModule,
        MatInputModule,
        MatCardModule,
        MatNativeDateModule,
        MatGridListModule,
        MatTableModule,
        MatProgressSpinnerModule
        } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { PurchaseDepartmentViewComponent } from './purchase-department-view/purchase-department-view.component';
import { ServiceLeaderViewComponent } from './service-leader-view/service-leader-view.component';
import { ServiceEngineerViewComponent } from './service-engineer-view/service-engineer-view.component';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule} from '@angular/material/menu';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { LineChartXAxisComponent } from './charts/line-chart-x-axis/line-chart-x-axis.component';
import { LineChartYAxisComponent } from './charts/line-chart-y-axis/line-chart-y-axis.component';
import { LineChartRundtischComponent } from './charts/line-chart-rundtisch/line-chart-rundtisch.component';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { SGaugeComponent } from './charts/s-gauge/s-gauge.component';

export function highchartsfactory() {
  const hc = require('highcharts');
  const hcm = require('highcharts/highcharts-more');
  const sg = require('highcharts/modules/solid-gauge');
  hcm(hc);
  sg(hc);
  return hc;
}

export declare let require: any;
// const AWS = require('aws-sdk/dist/aws-sdk-react-native');

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LineChartComponent,
    StorageComponent,
    MainviewComponent,
    LoginComponent,
    PurchaseDepartmentViewComponent,
    ServiceLeaderViewComponent,
    ServiceEngineerViewComponent,
    LineChartXAxisComponent,
    LineChartYAxisComponent,
    LineChartRundtischComponent,
    SGaugeComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    Ng2GoogleChartsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    AmazingTimePickerModule,
    MatGridListModule,
    MatTableModule,
    MatDividerModule,
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsfactory
   },
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
