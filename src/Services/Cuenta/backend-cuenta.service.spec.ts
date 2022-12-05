import { TestBed } from '@angular/core/testing';

import { BackendCuentaService } from './backend-cuenta.service';

describe('BackendCuentaService', () => {
  let service: BackendCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
