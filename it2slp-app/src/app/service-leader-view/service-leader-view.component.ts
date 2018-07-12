import { Component, OnInit, AfterViewInit, Input, AfterViewChecked, ViewChild } from '@angular/core';

// tslint:disable-next-line:import-blacklist
// import { Observable, Subscriber} from 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EngineerService } from '../services/engineer.service';
import { Engineer } from '../services/engineer';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-service-leader-view',
  templateUrl: './service-leader-view.component.html',
  styleUrls: ['./service-leader-view.component.css']
})
export class ServiceLeaderViewComponent implements OnInit, AfterViewChecked {

    engineers: Engineer[];
    selected = null;
    selectedKartusche = null;
    myDate = new Date();
    timevalue = '19:00';
    data;
    dataSchmierstelleLinearAchseX: any = undefined;
    dataSchmierstelleLinearAchseY: any = undefined;
    dataSchmierstelleRundtisch: any = undefined;
    // gaugeChartDataX;
    gaugeChartDataY;
    gaugeChartDataRundtisch ;

    @ViewChild('cchart') cchart;

    



  constructor(private EngService: EngineerService, private dataService: DataService) {
    this.engineers = EngService.getEngineers();
   }
  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
  }

  ngAfterViewChecked(): void {
  }

  doMail(engineer: Engineer) {
    const time = this.timevalue.split(':');
    this.myDate.setHours(Number(time[0]));
    this.myDate.setMinutes(Number(time[1]));
    console.log(this.myDate);

    // tslint:disable-next-line:max-line-length
    location.href = 'mailto:' + engineer.email + '?subject=Service Task&body=Kartusche ' + this.selectedKartusche + ' bis spätestens ' + this.myDate + ' .';
}



}