import { TestBed } from '@angular/core/testing';

import { SwaggerPetstoreOpenApi301Service } from './swagger-petstore-open-api301.service';

describe('SwaggerPetstoreOpenApi301Service', () => {
  let service: SwaggerPetstoreOpenApi301Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwaggerPetstoreOpenApi301Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
