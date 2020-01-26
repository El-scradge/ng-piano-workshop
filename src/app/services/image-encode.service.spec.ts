import { TestBed } from '@angular/core/testing';

import { ImageEncodeService } from './image-encode.service';

describe('ImageEncodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageEncodeService = TestBed.get(ImageEncodeService);
    expect(service).toBeTruthy();
  });
});
