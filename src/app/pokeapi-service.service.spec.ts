/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokeapiServiceService } from './pokeapi-service.service';

describe('PokeapiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeapiServiceService]
    });
  });

  it('should ...', inject([PokeapiServiceService], (service: PokeapiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
