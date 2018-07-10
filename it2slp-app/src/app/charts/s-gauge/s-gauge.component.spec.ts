import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SGaugeComponent } from './s-gauge.component';

describe('SGaugeComponent', () => {
  let component: SGaugeComponent;
  let fixture: ComponentFixture<SGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
