import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLeaderViewComponent } from './service-leader-view.component';

describe('ServiceLeaderViewComponent', () => {
  let component: ServiceLeaderViewComponent;
  let fixture: ComponentFixture<ServiceLeaderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLeaderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
