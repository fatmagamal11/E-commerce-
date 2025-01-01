import { TestBed } from '@angular/core/testing';

import { SelectedCategoryService } from './selected-category.service';

describe('SelectedCategoryService', () => {
  let service: SelectedCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
