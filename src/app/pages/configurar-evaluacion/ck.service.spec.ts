import { TestBed } from '@angular/core/testing';

import { CkService } from './ck.service';

describe('CkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CkService = TestBed.get(CkService);
    expect(service).toBeTruthy();
  });
});
