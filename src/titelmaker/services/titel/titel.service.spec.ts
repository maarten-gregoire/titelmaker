import { TestBed } from '@angular/core/testing';

import { TitelService } from './titel.service';

describe('CategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitelService = TestBed.get(TitelService);
    expect(service).toBeTruthy();
  });
});
