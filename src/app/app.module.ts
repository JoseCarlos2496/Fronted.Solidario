import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ClienteComponent } from './Cliente/cliente.component';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CuentaComponent } from './Cuenta/cuenta.component';
import { MovimientoComponent } from './Movimiento/movimiento.component';
import { ReporteComponent } from './Reporte/reporte.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent, ClienteComponent, CuentaComponent, MovimientoComponent, ReporteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
