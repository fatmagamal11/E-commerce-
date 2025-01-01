import { TestBed } from '@angular/core/testing';

import { SahredService } from './sahred.service';

describe('SahredService', () => {
  let service: SahredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SahredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
