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
  public c: AWS.Config;



  constructor() {
// import entire SDK
// const inspect = require('util-inspect');


  }

  ngOnInit() {
    const machineLearning = new AWS.MachineLearning();
    /*
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
    };*/
    const AKID = 'AKIAJVMIBHKSHGFAS3BQ';
const SECRET = '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';


    const params = {
      MLModelId: 'ml-bqJdgMA9Ikr',
      PredictEndpoint: 'https://realtime.machinelearning.eu-west-1.amazonaws.com',
      accessKeyId: AKID,
      secretAccessKey: SECRET,
      region: 'eu-west-1',
      Record: {
      'y': '',
      }
      };
    // const pred = machineLearning.PredictEndpoint();
    const pred2 = machineLearning.predict(params);
    console.log(inspect(pred2));
    console.log(JSON.stringify({ data: pred2}, null, 4));


  }



}
