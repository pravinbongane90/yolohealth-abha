import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhaAddress } from './abha-address';

describe('PatientStep', () => {
  let component: AbhaAddress;
  let fixture: ComponentFixture<AbhaAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbhaAddress],
    }).compileComponents();

    fixture = TestBed.createComponent(AbhaAddress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
