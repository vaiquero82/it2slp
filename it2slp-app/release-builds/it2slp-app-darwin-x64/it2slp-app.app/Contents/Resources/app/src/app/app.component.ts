import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedView: String = 'line-chart';

  public rcvText(value): void {
    this.selectedView = value;
  }
}
