console.log("Imprime en la consola");

//Variable 
/* var edad = 24;
console.log(typeof edad); */

var nombre = "Waldo";
console.log(typeof nombre);

var casado = false;
console.log(typeof casado);

// operadores logicos
console.log("5 > 9");
console.log(5 > 9);

console.log("0 < 3");
console.log(0 < 3);

console.log("-3 >= -9");
console.log(-3 >= -9);

console.log("Gera == Juan");
console.log(nombre == "Juan");

if (5 > 9) {
    console.log("La condicion se cumple");
} else {
    console.log("La condicion no se cumple");
}

function MayorDeEdad(edad) {
    if (edad >= 18) {
        console.log(edad + " Eres mayor de edad");
    } else {
        console.log(edad + " No eres mayor de edad :( ");
    }
}

MayorDeEdad(19);
MayorDeEdad(5);
MayorDeEdad(99);
MayorDeEdad(prompt("Escribe tu edad"));