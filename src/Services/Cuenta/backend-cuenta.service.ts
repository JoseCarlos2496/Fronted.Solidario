import { Cuenta } from '../../Interfaces/ICuenta';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendCuentaService {
  urlAccount: string = 'http://localhost:5037/api/Cuenta';

  constructor(private http: HttpClient) {
    console.log('Servicio Cliente Ok');
  }

  public getAll() {
    return this.http.get(this.urlAccount);
  }

  public getById(idClient: number) {
    return this.http.get(this.urlAccount + '/ByClientId/' + idClient);
  }

  public getByAccountNumber(numCuenta: string) {
    return this.http.get(this.urlAccount + '/ByNumeroCuenta/' + numCuenta);
  }

  public post(cuenta: Cuenta) {
    return this.http.post(this.urlAccount, cuenta);
  }

  public put(cuenta: Cuenta) {
    return this.http.put(this.urlAccount, cuenta);
  }

  public delete(id: number) {
    return this.http.delete(this.urlAccount + '/' + id);
  }
}
