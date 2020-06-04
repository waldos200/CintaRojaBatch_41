class Banda {
    // metodo especial
    constructor(nombre, anio, website, genero) {
        this.nombre = nombre;
        this.anio = anio;
        this.website = website;
        this.genero = genero;
    }
}

// exporto la clase como un objeto 
module.exports = { Banda };

// --------------------------------------------------------------------------------------------

/* // obeto literal
const BandaX = {
    nombre: 'Nirvana',
    anio: 1990,
    website: 'www.nirvana.com',
    genero: 'Rock'
}

// Destructuracion de objetos
const {nombre, anio, website, genero} = BandaX;

console.log(nombre);
console.log(anio);
console.log(website);
console.log(genero); */
