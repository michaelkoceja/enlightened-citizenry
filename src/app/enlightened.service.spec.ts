import { TestBed, inject } from '@angular/core/testing';

import { EnlightenedService } from './enlightened.service';

describe('EnlightenedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnlightenedService]
    });
  });

  it('should ...', inject([EnlightenedService], (service: EnlightenedService) => {
    expect(service).toBeTruthy();
  }));
});
