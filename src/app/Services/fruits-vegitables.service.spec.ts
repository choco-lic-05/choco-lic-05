import { TestBed } from '@angular/core/testing';

import { FruitsVegitablesService } from './fruits-vegitables.service';

describe('FruitsVegitablesService', () => {
  let service: FruitsVegitablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitsVegitablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
