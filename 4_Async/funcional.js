// for me imprima 1 - 100
// los pares

/* for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} */

// ES6 => "JS Moderno" (Async, callbacks)
// Adquirir nuevos habitos
const pi = 3.1416;
console.log(pi);

let edad = 24;
console.log(edad);
edad =25
console.log(edad);

// Arrow Functions
const myFunction = () => "Hola esta es mi funcion";

console.log(myFunction());

const suma = (a, b) => a + b;

console.log(suma(2,4));

const array = ["Mexico", "Peru", "Colombia"];

// Imperativa
/* for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}  */

// unicamente arreglo
array.forEach((element) => console.log(element));

// Map => a generar un nuevo arreglo

// ["Pais 0: Mexico", "Pais 1: Peru", "Pais 2: Colombia"];
array.map((pais, indice, arreglo) => console.log(pais, indice, arreglo));

const newArray = array.map((pais, indice) => "Pais " + indice + ": " +pais);
console.log(newArray);

// es una forma de concatenar
// `pais ${indice}: ${elemento}`