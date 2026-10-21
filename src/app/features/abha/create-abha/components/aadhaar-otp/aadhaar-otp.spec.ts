import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhaarOtp } from './aadhaar-otp';

describe('OtpStep', () => {
  let component: AadhaarOtp;
  let fixture: ComponentFixture<AadhaarOtp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadhaarOtp],
    }).compileComponents();

    fixture = TestBed.createComponent(AadhaarOtp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
