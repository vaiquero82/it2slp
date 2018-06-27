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
        MatIcon,
        MatTabsModule,
        MatInputModule,
        MatCardModule,
        MatNativeDateModule
        } from '@angular/material';
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


export declare let require: any;
// const AWS = require('aws-sdk/dist/aws-sdk-react-native');

@NgModule({
  declarations: [
    MatIcon,
    AppComponent,
    TopBarComponent,
    LineChartComponent,
    StorageComponent,
    MainviewComponent,
    LoginComponent,
    PurchaseDepartmentViewComponent,
    ServiceLeaderViewComponent,
    ServiceEngineerViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    AmazingTimePickerModule
  ],
  providers: [
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
