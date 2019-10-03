import { TestBed } from '@angular/core/testing';

import { EvaluarseService } from './evaluarse.service';

describe('EvaluarseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluarseService = TestBed.get(EvaluarseService);
    expect(service).toBeTruthy();
  });
});
