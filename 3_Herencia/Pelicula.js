var { Largometraje } = require("./Largometraje");

// Clase Hijo
class Pelicula extends Largometraje {
    constructor(titulo, duracion, genero, director) {
        super(titulo, duracion);
        this.genero = genero;
        this.director = director;
        this.entrada = "$5";
    }
}

var pelicula1 = new Pelicula("Episodio I Star Wars", "90 mins", "Ciencia ficcion", "Goerge Lucas");
var pelicula2 = new Pelicula("Hombre al agua", "80 mins", "Comedia", "Eugenio Dervez");

module.exports = { pelicula1, pelicula2 };