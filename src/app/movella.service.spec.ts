import { TestBed } from '@angular/core/testing';

import { MovellaService } from './movella.service';

describe('MovellaService', () => {
  let service: MovellaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovellaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
