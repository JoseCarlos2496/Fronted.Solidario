import { Movimiento } from '../../Interfaces/IMovimiento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendMovimientoService {
  urlPayment: string = 'http://localhost:5037/api/Movimiento';

  constructor(private http: HttpClient) {
    console.log('Servicio Cliente Ok');
  }

  public getAll() {
    return this.http.get(this.urlPayment);
  }

  public getById(id: number) {
    return this.http.get(this.urlPayment + '/ById/' + id);
  }

  public getByUsername(numCuenta: string) {
    return this.http.get(this.urlPayment + '/ByNumeroCuenta/' + numCuenta);
  }

  public post(movimiento: Movimiento) {
    return this.http.post(this.urlPayment, movimiento);
  }

  public put(movimiento: Movimiento) {
    return this.http.put(this.urlPayment, movimiento);
  }

  public delete(id: number) {
    return this.http.delete(this.urlPayment + '/' + id);
  }
}
