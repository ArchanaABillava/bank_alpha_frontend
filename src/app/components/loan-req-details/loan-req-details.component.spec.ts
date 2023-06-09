import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReqDetailsComponent } from './loan-req-details.component';

describe('LoanReqDetailsComponent', () => {
  let component: LoanReqDetailsComponent;
  let fixture: ComponentFixture<LoanReqDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanReqDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanReqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
