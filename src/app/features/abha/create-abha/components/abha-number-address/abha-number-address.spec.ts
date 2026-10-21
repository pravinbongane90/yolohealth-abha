import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhaNumberAddress } from './abha-number-address';

describe('ReviewStep', () => {
  let component: AbhaNumberAddress;
  let fixture: ComponentFixture<AbhaNumberAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbhaNumberAddress],
    }).compileComponents();

    fixture = TestBed.createComponent(AbhaNumberAddress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
