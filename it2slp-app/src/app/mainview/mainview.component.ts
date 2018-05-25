import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  @Input() selectedView: String;

  constructor() { }

  ngOnInit() {
  }



}
