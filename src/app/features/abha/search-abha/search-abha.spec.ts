import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAbha } from './search-abha';

describe('SearchAbha', () => {
  let component: SearchAbha;
  let fixture: ComponentFixture<SearchAbha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAbha],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchAbha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
