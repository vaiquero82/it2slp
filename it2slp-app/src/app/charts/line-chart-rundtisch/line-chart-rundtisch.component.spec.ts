import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartRundtischComponent } from './line-chart-rundtisch.component';

describe('LineChartRundtischComponent', () => {
  let component: LineChartRundtischComponent;
  let fixture: ComponentFixture<LineChartRundtischComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartRundtischComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartRundtischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
