import { Component, OnInit } from '@angular/core';
import { EngineerService } from '../services/engineer.service';
import { Engineer } from '../services/engineer';
import {ActivatedRoute} from '@angular/router';
import { ServiceTask } from '../services/servicetask';

@Component({
  selector: 'app-service-engineer-view',
  templateUrl: './service-engineer-view.component.html',
  styleUrls: ['./service-engineer-view.component.css']
})
export class ServiceEngineerViewComponent implements OnInit {

  dataModel: Engineer;
  user = 'Schmidt';
  constructor(private EngService: EngineerService, private route: ActivatedRoute) {
    console.log(this.route);
     // this.route.params.subscribe( params => this.log(params['name']));
     this.log('Schmidt');
   }

   log(s: string) {
     this.user = s;

     console.log(this.EngService.getEngineers().filter(
       item => item.lastName === 'Schmidt'
     ));
     const results = this.EngService.getEngineers().filter(
       item => item.lastName === 'Schmidt'
     );
     this.dataModel = results[0];
     this.outE();
   }

  ngOnInit() {
  }



  outE() {
    console.log(this.dataModel);
  }

  toggleVis(item) {
    if (item.display === 'keyboard_arrow_down') {
      item.display = 'keyboard_arrow_up';
    } else {
      item.display = 'keyboard_arrow_down';
    }
  }
  changeStateR(item) {
    if (item.done === 'error') {
      item.done = 'hourglass_empty';
    } else if (item.done === 'done') {
      item. done = 'error';
    } else {
      item.done = 'done';
    }
  }
  changeStateL(item) {
    console.log(item.done);
    if (item.done === 'error') {
      item.done = 'done';
      console.log(item.done);
    } else if (item.done === 'done') {
      item. done = 'hourglass_empty';
    } else {
      item.done = 'error';
    }
  }
}
