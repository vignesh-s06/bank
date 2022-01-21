import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingCalcComponent } from './banking-calc.component';

describe('BankingCalcComponent', () => {
  let component: BankingCalcComponent;
  let fixture: ComponentFixture<BankingCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
