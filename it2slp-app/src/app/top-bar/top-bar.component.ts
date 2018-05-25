import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  selectedView: String = 'line-chart';
  @Output() activeView: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(value: String): void {
    this.selectedView = value;
    this.activeView.emit(value);
  }
}
