import { Component, OnInit, AfterViewInit, Input, AfterViewChecked, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';
// tslint:disable-next-line:import-blacklist
// import { Observable, Subscriber} from 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EngineerService } from '../services/engineer.service';
import { Engineer } from '../services/engineer';
import { DataService } from '../services/data.service';
import { PredictionService } from '../services/secret/prediction.service';

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
    resultData = [ 1, 1, 1];
    resultDate = [ new Date(0), new Date(0), new Date(0)];
    dataSchmierstelleLinearAchseX: any = undefined;
    dataSchmierstelleLinearAchseY: any = undefined;
    dataSchmierstelleRundtisch: any = undefined;
    // gaugeChartDataX;
    gaugeChartDataY;
    gaugeChartDataRundtisch ;

    @ViewChild('cchart') cchart;

    



  constructor(private predictionService: PredictionService, private EngService: EngineerService, private dataService: DataService) {
    this.engineers = EngService.getEngineers();
    this.predictionService.predictKartuscheX();
    this.predictionService.predictKartuscheY();
    this.predictionService.predictRundTisch();
   for (let i = 0; i < 3; i++) {
    this.predictionService.bSubject[i].subscribe( data => {
      this.resultData[i] = Number(data);
      this.resultData[i] = this.resultData[i] * 1000
      // convert this (resultData) timestamp to date and bind it to the GUI
      const time = new Date(0);
      time.setTime(this.resultData[i]);
      this.resultDate[i] = time;
       console.log('resultData from predict', this.resultDate[i]);
    });
     
   }

  }

   getPredictionX() {

  }

  ngOnInit() {
  }

  

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    // console.log(this.resultDataX, this.resultDataY, this.resultDataR);
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