import { TestBed } from '@angular/core/testing';

import { SleepStorageService } from './sleep-storage.service';

describe('SleepStorageService', () => {
  let service: SleepStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleepStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
