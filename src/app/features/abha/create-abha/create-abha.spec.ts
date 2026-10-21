import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAbha } from './create-abha';

describe('CreateAbha', () => {
  let component: CreateAbha;
  let fixture: ComponentFixture<CreateAbha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAbha],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAbha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
