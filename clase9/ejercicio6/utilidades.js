export function formatearPrecio(precio){
    return "$120.000";
}

export function calcularDescuento (precio, porcentaje){
    return precio= precio - (porcentaje / 100 * precio);
}

export function estaDisponible(stock){
    return stock > 0 ? true : false;
}