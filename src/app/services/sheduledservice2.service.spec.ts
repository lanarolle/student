import { TestBed } from '@angular/core/testing';

import { Sheduledservice2Service } from './sheduledservice2.service';

describe('Sheduledservice2Service', () => {
  let service: Sheduledservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sheduledservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
