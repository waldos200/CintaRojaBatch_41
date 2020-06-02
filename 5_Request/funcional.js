const array = [10, 21, 33, 46, 52]

// Imperativa => Iteramos nuestro arreglo por medio de un for
/* for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} */

// Manera uncional de recorrer un arreglo
// forEach

array.forEach(function (valor) { console.log(valor); });

// map
// generar un nuevo arreglo a partir de otro
array.map((a, b, c) => console.log(a, b, c))
// generrar un nuevo arrego con su valor multiplicado por dos
const array2 = array.map((element, index) => `indice ${index} ${element * 2}`);
console.log(array2);

// Filter
// genera un nuevo arreglo como lo hace map pero este cumplira una condicion
const arrayFilter = array.filter((element) => element % 2 !== 0);
console.log(arrayFilter);

const countries = ["Mexico", "Peru", "Colombia", "Costa Rica"]
// utiliando filter me devuelva los paises con 5 caracteres o menos
const countryFilter = countries.filter((country) => country.length <= 6);
console.log(countryFilter);

// Aplication Programing Interfase => API