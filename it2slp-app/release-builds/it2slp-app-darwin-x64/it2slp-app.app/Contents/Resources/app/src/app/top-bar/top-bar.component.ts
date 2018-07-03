import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  selectedView: String = 'line-chart';
  @Output() activeView: EventEmitter<String> = new EventEmitter<String>();

  constructor(    private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
  }

  onSelect(value: String): void {
    this.selectedView = value;
    this.activeView.emit(value);
  }


    goBack(): void {
      this.location.back();
    }

}
