/**
 * Ficha prática 9 - angular-product-app
 * @author Pedro Machado "pedroma2000"
 */
import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';

describe('RestService', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});