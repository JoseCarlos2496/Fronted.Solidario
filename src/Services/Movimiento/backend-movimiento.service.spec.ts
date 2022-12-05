import { TestBed } from '@angular/core/testing';

import { BackendMovimientoService } from './backend-movimiento.service';

describe('BackendMovimientoService', () => {
  let service: BackendMovimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendMovimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
