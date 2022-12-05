import { BackendMovimientoService } from '../../Services/Movimiento/backend-movimiento.service';
import { Movimiento } from '../../Interfaces/IMovimiento';
import { ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-Movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
})
export class MovimientoComponent {

  constructor(
    public _paymentService: BackendMovimientoService,
    private cdRef: ChangeDetectorRef
  ) {}

  title = 'Modulo de Movimientos';

  paymentList: Array<any> = [];
  columnas: string[] = [
    'Id',
    'Fecha',
    'Tipo Movimiento',
    'Valor',
    'Saldo',
    '# Cuenta',
  ];

  //Objeto para Movimiento
  clienteId: number = 0;
  usernameId: string = '';
  id: number = 0;
  fecha: string = '';
  tipoMovimiento = '';
  valor: number = 0;
  saldo: number = 0;
  cuentaId: string = '';

  private byIdPayment: Movimiento = {
    id: this.id,
    fecha: this.fecha,
    tipoMovimiento: this.tipoMovimiento,
    valor: this.valor,
    saldo: this.saldo,
    cuentaId: this.cuentaId,
  };

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  cleanData() {
    this.clienteId = 0;
    this.usernameId = '';
    this.id = 0;
    this.fecha = '';
    this.tipoMovimiento = '';
    this.valor = 0;
    this.saldo = 0;
    this.cuentaId = '';

    this.paymentList = [];
  }

  logChange(index: any) {
    this.cleanData();
  }

  async getPayments() {
    let data = await this._paymentService
      .getAll()
      .pipe(map((resp: any) => resp.data))
      .toPromise();
    this.paymentList = data;
  }

  async getPaymentById(id: number) {
    if (id == 0) {
      window.alert('El id Movimiento no puede ser 0 (Zero)');
    } else if (id == null) {
      window.alert('El id Movimiento no puede ser null');
    } else {
      let data = await this._paymentService
        .getById(id)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      this.byIdPayment = data;

      this.fecha = this.byIdPayment.fecha;
      this.tipoMovimiento = this.byIdPayment.tipoMovimiento;
      this.valor = this.byIdPayment.valor;
      this.saldo = this.byIdPayment.saldo;
      this.cuentaId = this.byIdPayment.cuentaId;
    }
  }

  async getPaymentByUsername(numeroCuenta: string) {
    if (numeroCuenta == '' || numeroCuenta == null) {
      window.alert('El id Movimiento no puede ser vacio o nulo');
    } else {
      let data = await this._paymentService
        .getByUsername(numeroCuenta)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      this.paymentList = data;
    }
  }

  async addPayment() {
    const nuevoMovimiento: Movimiento = {
      id: this.id,
      fecha: new Date().toISOString(),
      tipoMovimiento: this.tipoMovimiento,
      valor: this.valor,
      saldo: this.saldo,
      cuentaId: this.cuentaId,
    };

    let data = await this._paymentService
      .post(nuevoMovimiento)
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    window.alert(data);

    this.cleanData();
  }

  async updatePayment() {
    const actualizaMovimiento: Movimiento = {
      id: this.id,
      fecha: this.fecha,
      tipoMovimiento: this.tipoMovimiento,
      valor: this.valor,
      saldo: this.saldo,
      cuentaId: this.cuentaId,
    };

    let data = await this._paymentService
      .put(actualizaMovimiento)
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    window.alert(data);

    this.cleanData();
  }

  async deletePayment(id: number) {
    if (id == 0) {
      window.alert('El id Movimiento no puede ser 0 (Zero)');
    } else if (id == null) {
      window.alert('El id Movimiento no puede ser null');
    } else {
      let data = await this._paymentService
        .getById(id)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      console.log('GetAll', data);

      window.alert(data);

      this.cleanData();
    }
  }
}
