/* var platillo = {
    nombre: "Hamburguesa",
    ingredientes: ["Carne", "Queso", "Mayonesa", "Mostaza"],
    tamanio: "Doble",
    ConTocino: true
}
// console.log(platillo);
console.log(platillo.nombre); */

// Primera leta mayuscula y singular
class Auto {
    // meodo especial que tiene todas las clases
    // primero en eecutarse
    constructor(color, motor, matricula) {
        this.color = color;
        this.motor = motor;
        this.llantas = 4;
        this.matricula = matricula;
        this.volante = true;
    }

    // Metodo
    encender() {
        return "El auto " + this.color + " ha sido encendido " + "y tiene un motor " + this.motor;
    }

    cerrar(){
        return "El auto " + this.color + " ha sido cerrado";
    }

    // Seters
    cambiarMotor(nuevoMotor){
        this.motor = nuevoMotor;
        return "Se ha cambiado el motor"
    }

    pintarAuto(nuevoColor){
        this.color = nuevoColor;
        return "Se ha pintado el auto";
    }

    obtenResumen(){
        if (this.motor == "Electrico") {
            return "Este auto es de color " + this.color + ", tiene un motor de " + this.motor + ", tiene " + this.llantas + " llantas y su matricula es " + this.matricula;
        } else {
            return "Este auto es de color " + this.color + ", tiene " + this.llantas + " llantas y su matricula es " + this.matricula;
        }
        
    }
}

// Instancia de mi clase 
var miAuto = new Auto("Plata", "v4", "ju45j56i");
var autoDos = new Auto("Rojo", "v6", "siue68sj");
var autoTres = new Auto("Negro", "Electrico", "ie34uh393")

console.log(miAuto);
/*console.log(autoDos);
console.log(autoTres);
console.log(miAuto.encender());
console.log(autoDos.encender());
console.log(autoTres.encender());
console.log(miAuto.cerrar());
console.log(autoDos.cerrar());
console.log(autoTres.cerrar()); */
console.log(miAuto.cambiarMotor("Electrico"));
console.log(miAuto.pintarAuto("Purpura"));
console.log(miAuto);
console.log(miAuto.obtenResumen());