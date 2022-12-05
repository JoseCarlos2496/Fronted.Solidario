import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendReporteService } from './../../Services/Reporte/backend-reporte.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-Reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent {
  title = 'Modulo de Reportes';

  constructor(
    public _reportService: BackendReporteService,
    private cdRef: ChangeDetectorRef
  ) {}

  reporteList: Array<any> = [];
  columnas: string[] = [
    'Identificacion',
    'Nombre',
    'Numero Cuenta',
    'Tipo Cuenta',
    'Saldo Disponible',
    'Saldo Mensual',
  ];

  identificacion: string = '';

  async getReportsByIdentification(clienteIdentificacion: string) {
    if (clienteIdentificacion == '') {
      window.alert('el campo Identificación no puede ser vacio');
    } else {
      let data = await this._reportService
        .getByidentification(clienteIdentificacion)
        .pipe(map((resp: any) => resp.data))
        .toPromise();
      console.table('GetAll', data);
      this.reporteList = data;

      data.console.error();
    }
  }
}
