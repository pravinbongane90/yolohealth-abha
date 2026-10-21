import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhaProfile } from './abha-profile';

describe('SuccessStep', () => {
  let component: AbhaProfile;
  let fixture: ComponentFixture<AbhaProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbhaProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(AbhaProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
