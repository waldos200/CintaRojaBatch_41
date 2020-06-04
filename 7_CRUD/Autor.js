class Autor {
    constructor(nombre, apellido, nacionaldad, biography, gender, age) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionaldad = nacionaldad;
        this.biography = biography;
        this.gender = gender;
        this.age = age;
        this.alive = true;
    }
}

module.exports = { Autor }