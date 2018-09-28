import { TestBed, inject } from '@angular/core/testing';

import { ObtenerUrlRedireccionServiceService } from './obtener-url-redireccion-service.service';

describe('ObtenerUrlRedireccionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObtenerUrlRedireccionServiceService]
    });
  });

  it('should be created', inject([ObtenerUrlRedireccionServiceService], (service: ObtenerUrlRedireccionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
