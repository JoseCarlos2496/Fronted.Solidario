import { Cliente } from '../../Interfaces/ICliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendClienteService {
  urlClient: string = 'http://localhost:5037/api/Cliente';

  constructor(private http: HttpClient) {
    console.log('Servicio Cliente Ok');
  }

  public getAll() {
    return this.http.get(this.urlClient);
  }

  public getById(id: number) {
    return this.http.get(this.urlClient + '/ById/' + id);
  }

  public getByUsername(username: string) {
    return this.http.get(this.urlClient + '/ByUsername/' + username);
  }

  public post(cliente: Cliente) {
    return this.http.post(this.urlClient, cliente);
  }

  public put(cliente: Cliente) {
    return this.http.put(this.urlClient, cliente);
  }

  public delete(id: number) {
    return this.http.delete(this.urlClient + '/' + id);
  }
}
