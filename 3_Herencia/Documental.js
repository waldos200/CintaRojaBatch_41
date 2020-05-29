var { Largometraje } = require("./Largometraje");

class Documental extends Largometraje {
    constructor(titulo, duracion, patrocinador, anio) {
        super(titulo, duracion);
        this.patrocinador = patrocinador;
        this.anio = anio;
        this.entrada = "$3";
    }
}

var documental1 = new Documental("The last dance", "60 min", "Netflix", 2020);
var documental2 = new Documental("Sing", "120 min", "Netlfix", 2014);

module.exports = { documental1, documental2 };