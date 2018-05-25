import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StorageComponent } from './storage/storage.component';
import { MainviewComponent } from './mainview/mainview.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LineChartComponent,
    StorageComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
