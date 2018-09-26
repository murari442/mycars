import { TestBed, inject } from '@angular/core/testing';

import { CarGuardService } from './car-guard.service';

describe('CarGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarGuardService]
    });
  });

  it('should be created', inject([CarGuardService], (service: CarGuardService) => {
    expect(service).toBeTruthy();
  }));
});
