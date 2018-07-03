import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEngineerViewComponent } from './service-engineer-view.component';

describe('ServiceEngineerViewComponent', () => {
  let component: ServiceEngineerViewComponent;
  let fixture: ComponentFixture<ServiceEngineerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEngineerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEngineerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
