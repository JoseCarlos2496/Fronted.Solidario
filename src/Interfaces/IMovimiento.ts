export interface Movimiento {
  id: number;
  fecha: string;
  tipoMovimiento: string;
  valor: number;
  saldo: number;
  cuentaId: string;
}
