import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDepartmentViewComponent } from './purchase-department-view.component';

describe('PurchaseDepartmentViewComponent', () => {
  let component: PurchaseDepartmentViewComponent;
  let fixture: ComponentFixture<PurchaseDepartmentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDepartmentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDepartmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
