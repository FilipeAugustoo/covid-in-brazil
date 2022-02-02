import { TestBed } from '@angular/core/testing';

import { CovidInBrazilService } from './covid-in-brazil.service'

describe('CovidInBrazilService', () => {
  let service: CovidInBrazilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidInBrazilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
