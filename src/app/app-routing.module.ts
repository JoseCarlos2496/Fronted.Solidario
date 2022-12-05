import { ReporteComponent } from './Reporte/reporte.component';
import { CuentaComponent } from './Cuenta/cuenta.component';
import { ClienteComponent } from './Cliente/cliente.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimientoComponent } from './Movimiento/movimiento.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  {
    path: 'cuenta',
    component: CuentaComponent,
  },
  {
    path: 'movimiento',
    component: MovimientoComponent,
  },
  {
    path: 'reporte',
    component: ReporteComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
