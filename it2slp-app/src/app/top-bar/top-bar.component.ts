import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  selectedView: String = 'teamDPI';

  constructor() { }

  ngOnInit() {
  }

  onSelect(value: String): void {
    this.selectedView = value;
  }
}
