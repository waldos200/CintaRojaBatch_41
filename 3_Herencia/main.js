// PascalCase => Clases
// camelCase => variables, funciones, metodos, atributos

// Super clase o clase padre
class Mascota {
    // Todas as clases tienen constructor
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas;
    }

    alimentarse() {
        return this.nombre + " se esta alimentando";
    }
}

// Perros => subclase de Mascota "extends" palabra reservada para poner herencias
class Perro extends Mascota {
    constructor(nombre, patas, ladra, cola) {
        // "super" palabra reservada para ejecutar constructor de la clase padre
        super(nombre, patas);
        this.ladra = ladra;
        this.cola = cola;
    }

    truco() {
        return this.nombre + " esta haciendo un truco";
    }
}

var perro1 = new Perro("Alfonso", 4, true, false);
console.log(perro1);
console.log(perro1.alimentarse());
console.log(perro1.truco());

// Serpiente
class Serpiente extends Mascota {
    constructor(nombre, patas, color) {
        super(nombre, patas);
        this.color = color;
        this.venenosa = false;
    }

    enrroscarse() {
        return this.nombre + " se esta enrroscando";
    }
}

var serpiente1 = new Serpiente("Boa", 0, "Cafe");
console.log(" ");
console.log(serpiente1);
console.log(serpiente1.alimentarse());
console.log(serpiente1.enrroscarse());