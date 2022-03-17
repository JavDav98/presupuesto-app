import {Ingreso} from './ingreso.model';

export class IngresoService{
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('CAmbio SSD', 150)
  ];
}
