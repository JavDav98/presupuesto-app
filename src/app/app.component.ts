import { Component } from '@angular/core';
import {Ingreso} from './ingreso/ingreso.model';
import {Egreso} from './egreso/egreso.model';
import {IngresoService} from './ingreso/ingreso.service';
import {EgresoService} from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Presupuesto con Antular';
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(private ingresoService: IngresoService,
              private egresoService: EgresoService) {
    this.ingresos = ingresoService.ingresos;
    this.egresos = egresoService.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentaje(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
