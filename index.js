/**
 * PROFESORES-B
    En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
    un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
    que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
    de la clase Cl_profesor.
    Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
    datos de un profesor contratado y reporte su ingreso total. 
 */

import Cl_fijo from './Cl_fijo.js';
import Cl_contratado from './Cl_contratado.js';

export default class Cl_main {
  constructor() {
    const profesor1 = new Cl_contratado('Rafael', 30, 15);
    const profesor2 = new Cl_contratado('Felicia', 30, 20);

    const salida = document.getElementById('salida');
    salida.innerHTML = `
        Nombre del profesor contratado: ${profesor1.nombre}
        <br>
        Monto del bono: $${profesor1.bono}
        <br>
        Cantidad de horas: ${profesor1.horas}
        <br>
        Ingreso total del profesor ${profesor1.nombre}: $${profesor1.ingresoTotal()}
    `;
  }
}
