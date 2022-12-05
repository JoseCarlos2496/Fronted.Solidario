import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cliente } from '../../Interfaces/ICliente';
import { BackendClienteService } from './../../Services/Cliente/backend-cliente.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-Cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  title = 'Modulo de Clientes';

  clienteslista: Array<any> = [];
  columnas: string[] = ['Id', 'Identificacion', 'Nombre', 'Usuario'];

  //Objeto para Cliente
  clienteId: number = 0;
  usernameId: string = '';
  id: number = 0;
  identificacion = '';
  nombre = '';
  usuario = '';
  contrasena = '';
  estado = true;
  resultado = '';

  private byIdClient: Cliente = {
    id: this.id,
    identificacion: this.identificacion,
    nombre: this.nombre,
    usuario: this.usuario,
    contrasena: this.contrasena,
    estado: true,
  };

  private usernameClient: Cliente = {
    id: this.id,
    identificacion: this.identificacion,
    nombre: this.nombre,
    usuario: this.usuario,
    contrasena: this.contrasena,
    estado: true,
  };

  constructor(
    public _clientService: BackendClienteService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  cleanData() {
    this.clienteId = 0;
    this.id = 0;
    this.usernameId = '';
    this.identificacion = '';
    this.nombre = '';
    this.usuario = '';
    this.contrasena = '';
    this.clienteslista = [];
  }

  logChange(index: any) {
    this.cleanData();
  }

  async getClients() {
    let data = await this._clientService
      .getAll()
      .pipe(map((resp: any) => resp.data))
      .toPromise();
    this.clienteslista = data;
  }

  async getClientById(id: number) {
    if (id == 0) {
      window.alert('El id Cliente no puede ser 0 (Zero)');
    } else if (id == null) {
      window.alert('El id Cliente no puede ser null');
    } else {
      let data = await this._clientService
        .getById(id)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      this.byIdClient = data;

      this.identificacion = this.byIdClient.identificacion;
      this.nombre = this.byIdClient.nombre;
      this.usuario = this.byIdClient.usuario;
    }
  }

  async getClientByUsername(username: string) {
    if (username == '' || username == null) {
      window.alert('El id Cliente no puede ser vacio o nulo');
    } else {
      let data = await this._clientService
        .getByUsername(username)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      this.usernameClient = data;

      this.id = this.usernameClient.id;
      this.identificacion = this.usernameClient.identificacion;
      this.nombre = this.usernameClient.nombre;
      this.usuario = this.usernameClient.usuario;
    }
  }

  async addClient() {
    const nuevoCliente: Cliente = {
      id: this.id,
      identificacion: this.identificacion,
      nombre: this.nombre,
      usuario: this.usuario,
      contrasena: this.contrasena,
      estado: true,
    };

    let data = await this._clientService
      .post(nuevoCliente)
      .pipe(map((resp: any) => resp.data))
      .toPromise();
    console.log('Insert', data);

    window.alert(data);

    this.cleanData();
  }

  async updateClient() {
    const actualizaCliente: Cliente = {
      id: this.id,
      identificacion: this.identificacion,
      nombre: this.nombre,
      usuario: this.usuario,
      contrasena: this.contrasena,
      estado: true,
    };

    let data = await this._clientService
      .put(actualizaCliente)
      .pipe(map((resp: any) => resp.data))
      .toPromise();
    console.log('Update', data);

    window.alert(data);

    this.cleanData();
  }

  async deleteClient(id: number) {
    if (id == 0) {
      window.alert('El id Cliente no puede ser 0 (Zero)');
    } else if (id == null) {
      window.alert('El id Cliente no puede ser null');
    } else {
      let data = await this._clientService
        .getById(id)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      console.log('GetAll', data);

      window.alert(data);

      this.cleanData();
    }
  }
}
