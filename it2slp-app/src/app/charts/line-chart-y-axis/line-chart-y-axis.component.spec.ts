import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartYAxisComponent } from './line-chart-y-axis.component';

describe('LineChartYAxisComponent', () => {
  let component: LineChartYAxisComponent;
  let fixture: ComponentFixture<LineChartYAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartYAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartYAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
