class Persona {
    constructor(nombre, edad, genero, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return "Tu IMC es de: " + this.peso / (this.altura * this.altura);
    }

    esMayorDeEdad(){
        if(this.edad >= 18) {
            return "Eres mayor de edad"
        } else {
            return "Eres menor de edad"
        }
    }
}

var personaUno = new Persona("Waldo", 20, "M", 70, 1.80);

console.log(personaUno);
console.log(personaUno.calcularIMC());
console.log(personaUno.esMayorDeEdad());

class Cuenta {
    constructor(titular, cantidad) {
        this.titular =titular;
        this.cantidad = cantidad;
    }

    validacion(){
        if(this.cantidad >= 900) {
            return "Ya no se puede ingresar efectivo"
        } else if(this.cantidad <= 10){
            return "Ya no se puede sacar mas efectivo"
        } else {
            return "todo bien"
        }
    }

    Icantidad(nuevaCantidad) {
        this.cantidad = nuevaCantidad + this.cantidad;
        return "La nueva cantidad es: " + this.cantidad ;
    }

    Rcantidad(nuevoRetiro) {
        this.cantidad = this.cantidad - nuevoRetiro;
        return "La nueva cantidad es: " + this.cantidad ;
    }
}

var cuentaUno = new Cuenta("Waldo", 700);
console.log(cuentaUno);
console.log(cuentaUno.Icantidad(200));
console.log(cuentaUno.Rcantidad(100));
console.log(cuentaUno.validacion());