import { formatearPrecio, calcularDescuento, estaDisponible } from "../utilidades.js";
console.log(formatearPrecio(120000));        // "$120.000"
console.log(calcularDescuento(10000, 20));   // 8000
console.log(estaDisponible(0));              // false
console.log(estaDisponible(5));    