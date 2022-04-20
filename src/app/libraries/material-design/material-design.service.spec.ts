import { TestBed } from '@angular/core/testing';

import { MaterialDesignService } from './material-design.service';

describe('MaterialDesignService', () => {
  let service: MaterialDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
