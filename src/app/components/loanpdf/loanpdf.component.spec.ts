import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanpdfComponent } from './loanpdf.component';

describe('LoanpdfComponent', () => {
  let component: LoanpdfComponent;
  let fixture: ComponentFixture<LoanpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanpdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
