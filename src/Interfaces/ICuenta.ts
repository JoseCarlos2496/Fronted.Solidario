export interface Cuenta {
  id: number;
  numeroCuenta: string;
  saldoInicial: number;
  tipoCuenta: string;
  clienteId: number;
  estado: boolean;
}
