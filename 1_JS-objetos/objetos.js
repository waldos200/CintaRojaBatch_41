// JSON
// S => JavaScript
// O => Object
// N => Notation

// TODO COMO UN OBJETO

//Objeto
// Un objeto carece de orden de sus elementos
// llaves
var perro = {
    // llave: valor
    //atributos
    nombre: "Ayudante de Santa",
    edad: 31,
    color: "cafe",
    vive: true,
    juguetes: ["Pelota", "Hueso", "Peluche"],
    familia: {
        padre: "Homero",
        madre: "Marge",
        hermano: "Bart",
        hermana: "Lisa"
    },
    //metodos
    juega: function () {
        return "El perro esta jugando";
    },
    come: function(comida) {
        // String aminuscula .toLowerCase
        var comidaMinus = comida.toLowerCase();
        if (comidaMinus == "croquetas") {
            return "El perro esta comiendo " + comidaMinus;
        } else {
            return comidaMinus + " no es comida para perros";
        }
    }
}

// ¿Como accedo a una propiedad?
console.log(perro);
console.log(perro.edad);
console.log(perro.nombre);
console.log(perro.juguetes[2]);//accede al arreglo
console.log(perro.familia.hermano);//accede a atributos
console.log(perro.juega());//accede a la funcion que esta en el objeto
console.log(perro.come("Croquetas"));

//-------------------------------------------------------------

// Arreglo
// Un arreglo determina el orden de los elementos
// Corchetes
//               0           1          2        3
/* var paises = ["Mexico", "Colombia", "Ecuador", "Peru"]
// ¿Como accedo a una posicion?
console.log(paises);
console.log(paises[1]);
console.log(paises[3]);
console.log(paises[4]); */

// Pinguino o un ave famoso

// 5 caracteriticas
// 2 metodos

// mostrar en consola

/* ave.edad = 3; 
ave.casa = "Playa"*/

var ave = {
    nombre: "Hedwing",
    tipo: "Lechusa",
    dueño: "Harry Potter",
    ubicacion: "Inglaterra",
    color: "Blanco",
    volar: function() {
        return "Hedwing esta volando";
    },
    entregaCartas: function(carta) {
        if (carta == "si") {
            return "Esta entregando una carta a Harry";
        } else {
            return "Esta descansando";
        }
    }
}

console.log(ave);
console.log(ave.volar("si"));
console.log(ave.entregaCartas("si"));
ave.color = "negro";
ave.ubicacion = "playa";
console.log(ave);