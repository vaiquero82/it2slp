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
    resultDataX: number;
    resultDataY: number;
    resultDataR: number;
    dataSchmierstelleLinearAchseX: any = undefined;
    dataSchmierstelleLinearAchseY: any = undefined;
    dataSchmierstelleRundtisch: any = undefined;
    // gaugeChartDataX;
    gaugeChartDataY;
    gaugeChartDataRundtisch ;

    @ViewChild('cchart') cchart;

    



  constructor(private predictionService: PredictionService, private EngService: EngineerService, private dataService: DataService) {
    this.engineers = EngService.getEngineers();
    this.getPredictionX();
    this.getPredictionY();
    this.getPredictionR();
  }

   getPredictionX() {
      this.predictionService.predictKartuscheX();

      this.predictionService.bSubject.subscribe( data => {
      this.resultDataX = Number(data);
      // convert this (resultData) timestamp to date and bind it to the GUI
      const time = new Date(0);
      time.setTime(this.resultDataX * 1000);
       console.log('resultData from predict', this.resultDataX);
    });
  }
  getPredictionY() {
      this.predictionService.predictKartuscheY();
      this.predictionService.bSubject.subscribe( data => {
      this.resultDataY = Number(data);
      // convert this (resultData) timestamp to date and bind it to the GUI
      const time = new Date(0);
      time.setTime(this.resultDataY * 1000);
      console.log('resultData from predict', this.resultDataY);
    });
  }

  getPredictionR() {
      this.predictionService.predictRundTisch();
      this.predictionService.bSubject.subscribe( data => {
      this.resultDataR = Number(data);
      // convert this (resultData) timestamp to date and bind it to the GUI
      const time = new Date(0);
      time.setTime(this.resultDataR * 1000);
       console.log('resultData from predict', this.resultDataR);
    });
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