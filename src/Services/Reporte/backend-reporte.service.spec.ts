import { TestBed } from '@angular/core/testing';

import { BackendReporteService } from './backend-reporte.service';

describe('BackendReporteService', () => {
  let service: BackendReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
