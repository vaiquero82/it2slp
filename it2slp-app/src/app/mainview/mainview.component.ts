import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as AWS from 'aws-sdk';
import { utils } from 'protractor';
import * as inspect from 'util-inspect';





@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  @Input() selectedView: String;
  predictiveValue = 0.0;
  computedPredictiveValue = 0.0;
  public c: AWS.Config;



  constructor() {
// import entire SDK
// const inspect = require('util-inspect');


  }

  ngOnInit() {
    AWS.config.update({
    accessKeyId: 'AKIAJRMNBD4KBEYO34EQ',
      secretAccessKey: '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',
      region: 'us-east-1'
    });
    const machineLearning = new AWS.MachineLearning();
    const params = {
    MLModelId: 'ml-hoX2IVaQNFv',
    PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
    Record: {
    'timeStamp': '14141414',
    'numberOfPoints': '6',
    'category': 'M2',
    'tankLevel': '40',
    'greasingCount': '40',
    'requestCount': '1',
    'warningsState': '0',
    'timeSinceLastGreaseInSeconds': '3'
    }
    };




    machineLearning.predict(params, this.savePrediction.bind(this));
  }



  savePrediction(err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      this.predictiveValue =  data.Prediction.predictedValue;
      this.computePrediction(this.predictiveValue);
    }
  }

  computePrediction(x) {
    this.computedPredictiveValue =  Math.pow((x - (x * 0.4)), 10);
  }




}
