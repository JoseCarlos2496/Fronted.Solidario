import {ChangeDetectorRef, Component} from '@angular/core';
import {BackendCuentaService} from "../../Services/Cuenta/backend-cuenta.service";
import {Cuenta} from "../../Interfaces/ICuenta";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-Cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {

  constructor(
    public _accountService: BackendCuentaService,
    private cdRef: ChangeDetectorRef
  ) {}

  title = 'Modulo de Cuentas';

  accountList: Array<any> = [];
  columnas: string[] = [
    'Id',
    '# Cuenta',
    'Tipo Cuenta',
    'Saldo Inicial',
    'Ciente Id',
    'Estado',
  ];

  //Objeto para Cuenta
  numCuenta: string = '';
  id: number = 0;
  numeroCuenta: string = '';
  tipoCuenta: string = '';
  saldoInicial: number = 0;
  clienteId: number = 0;
  estado: boolean = true;

  private byIdAccountNumber: Cuenta = {
    id: this.id,
    numeroCuenta: this.numeroCuenta,
    tipoCuenta: this.tipoCuenta,
    saldoInicial: this.saldoInicial,
    estado: this.estado,
    clienteId: this.clienteId,
  };

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  cleanData() {
    this.clienteId = 0;
    this.numCuenta = '';
    this.id = 0;
    this.numeroCuenta = '';
    this.tipoCuenta = '';
    this.saldoInicial = 0;
    this.estado = true;
    this.clienteId = 0;

    this.accountList = [];
  }

  logChange(index: any) {
    this.cleanData();
  }

  async getAccounts() {
    let data = await this._accountService
      .getAll()
      .pipe(map((resp: any) => resp.data))
      .toPromise();
    this.accountList = data;
  }

  async getAccountByIdCliente(id: number) {
    if (id == 0) {
      window.alert('El id Cuenta no puede ser 0 (Zero)');
    } else if (id == null) {
      window.alert('El id Cuenta no puede ser null');
    } else {
      let data = await this._accountService
        .getById(id)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      this.accountList = data;
   }
  }

  async getByAccountNumber(numeroCuenta: string) {
    if (numeroCuenta == '' || numeroCuenta == null) {
      window.alert('El id Cuenta no puede ser vacio o nulo');
    } else {
      let data = await this._accountService
        .getByAccountNumber(numeroCuenta)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      this.byIdAccountNumber = data;

      this.id = this.byIdAccountNumber.id;
      this.numeroCuenta = this.byIdAccountNumber.numeroCuenta;
      this.tipoCuenta = this.byIdAccountNumber.tipoCuenta;
      this.saldoInicial = this.byIdAccountNumber.saldoInicial;
      this.estado = this.byIdAccountNumber.estado;
      this.clienteId = this.byIdAccountNumber.clienteId;
    }
  }

  async addAccount() {
    const nuevaCuenta: Cuenta = {
      id: this.id,
      numeroCuenta: this.numeroCuenta,
      tipoCuenta: 'Ahorro',
      saldoInicial: this.saldoInicial,
      estado: true,
      clienteId: this.clienteId,
    };

    let data = await this._accountService
      .post(nuevaCuenta)
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    window.alert(data);

    this.cleanData();
  }

  async updateAccount() {
    const actualizaCuenta: Cuenta = {
      id: this.id,
      numeroCuenta: this.numeroCuenta,
      tipoCuenta: this.tipoCuenta,
      saldoInicial: this.saldoInicial,
      estado: this.estado,
      clienteId: this.clienteId,
    };

    let data = await this._accountService
      .put(actualizaCuenta)
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    window.alert(data);

    this.cleanData();
  }

  async deleteAccount(id: number) {
    if (id == 0) {
      window.alert('El id Cuenta no puede ser 0 (Zero)');
    } else if (id == null) {
      window.alert('El id Cuenta no puede ser null');
    } else {
      let data = await this._accountService
        .getById(id)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      console.log('GetAll', data);

      window.alert(data);

      this.cleanData();
    }
  }
}
