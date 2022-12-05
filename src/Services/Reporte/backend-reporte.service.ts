import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BackendReporteService {
  urlReport: string = 'http://localhost:5037/api/Reporte';

  constructor(private http: HttpClient) {
    console.log('Servicio Cliente Ok');
  }

  public getByidentification(identificacion: string) {
    return this.http.get(this.urlReport + '?identificacion=' + identificacion);
  }
}
