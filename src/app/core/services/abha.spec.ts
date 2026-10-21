import { TestBed } from '@angular/core/testing';

import { Abha } from './abha';

describe('Abha', () => {
  let service: Abha;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Abha);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
