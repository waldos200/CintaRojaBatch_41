// uncion de orden superior
function miPrimerCallback(operacion, a, b) {
    return operacion(a, b)
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

/* console.log(suma(3, 5));
console.log(resta(8, 3)); */

console.log(miPrimerCallback(suma, 8, 4));
console.log(miPrimerCallback(resta, 8, 4));
console.log(miPrimerCallback(division, 16, 2));

/* Muestra un ensaje en consola mediante un callback. la uncion de orden superior
que escribas debe poder mostrar el mensaje como console.warm, console.log, console.info,
o cualquier metodo para pintar en sonsola del objeto console.*/

function OrdenSuperior(consola, mensaje){
    return consola(mensaje);
}

function warn(mensaje) {
    console.warn(mensaje);
}

function error(mensaje) {
    console.error(mensaje);
}

function info(mensaje){
    console.info(mensaje);
}

OrdenSuperior(warn, "esto es un warn");
OrdenSuperior(error, "esto es un error");
OrdenSuperior(info, "esto es un info");

/* Escribe una uncion de orden superior que reciba una cadena de 
caracteristicas y debe devolver, mediane un callback, la 
cadea de caracteres en mayusculas o en minusculas */

function segundaOrden(cadena, convertir) {
    return convertir(cadena);
}

function mayus(cadena) {
    return cadena.toUpperCase(); 
}

function minus(cadena) {
    return cadena.toLowerCase();
}

console.log(segundaOrden("HOLA A TODOS", minus));
console.log(segundaOrden("hola a todos", mayus));