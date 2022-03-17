import {Egreso} from './egreso.model';

export class EgresoService{
  egresos: Egreso[] = [
    new Egreso('Renta Depto', 1200),
    new Egreso('Internet', 275)
  ];
}
