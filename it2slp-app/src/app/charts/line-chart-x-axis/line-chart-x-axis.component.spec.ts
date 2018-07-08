import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartXAxisComponent } from './line-chart-x-axis.component';

describe('LineChartXAxisComponent', () => {
  let component: LineChartXAxisComponent;
  let fixture: ComponentFixture<LineChartXAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartXAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartXAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
