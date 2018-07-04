import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit, AfterViewChecked {



  title = 'app';
  selectedView: String = 'line-chart';

  dataX: any = undefined;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.getD();
  }



  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
    if (this.dataX === undefined) {
      console.log('dataX is: []');
    } else {
      console.log('****dataX is: ');
      console.log(this.dataX);
    }
  }



getD() {
  try {
    this.dataService.getDataX()
      .subscribe(resp => {
        console.log(resp, 'res');
        this.dataX = resp;
      },
        error => {
          console.log(error, 'error');
        });
  } catch (e) {
    console.log(e);
  }
}

  public logC(): void {
    console.log(this.dataX);
  }
}
