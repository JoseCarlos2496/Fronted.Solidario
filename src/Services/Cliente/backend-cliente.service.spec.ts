import { Cliente } from '../../Interfaces/ICliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendClientService {
  urlCliente: string = 'http://localhost:5037/api/Cliente';

  constructor(private http: HttpClient) {
    console.log('servicio backend listo');
  }

  public getAll() {
    return this.http.get(this.urlCliente);
  }

  public getById(id: number) {
    return this.http.get(this.urlCliente + '/ById/' + id);
  }

  public getByUsername(username: string) {
    return this.http.get(this.urlCliente + '/ByUsername/' + username);
  }

  public post(cliente: Cliente) {
    return this.http.post(this.urlCliente, cliente);
  }

  public put(cliente: Cliente) {
    return this.http.put(this.urlCliente, cliente);
  }

  public delete(id: number) {
    return this.http.delete(this.urlCliente + '/' + id);
  }
}
