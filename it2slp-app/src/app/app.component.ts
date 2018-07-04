import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedView: String = 'line-chart';

  constructor (private dataService: DataService) {
    dataService.getDataSchmierstelleRundtisch();
  }
  public rcvText(value): void {
    this.selectedView = value;
  }
}
