import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhaNumber } from './abha-number';

describe('MobileStep', () => {
  let component: AbhaNumber;
  let fixture: ComponentFixture<AbhaNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbhaNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(AbhaNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
