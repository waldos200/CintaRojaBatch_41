// CRUD (DB)
// Create
// Read
// Update
// Delete

const request = require('request');
// const { Autor } = require('./Autor')

const crearAutor = (autor) => {
    const endPoint = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
    return new Promise((resolve, reject) => {
        request.post(endPoint, autor, (error, response, body) => {
            if (error === null) {
                const respuesta = JSON.parse(body);
                resolve(respuesta)
            } else {
                reject('Autor repetido')
            }
        });
    });
}

crearAutor({
    name: "Waldo",
    last_name: "Mendoza",
    nacionalidad: "MX",
    biography: "No se",
    gender: "M",
    age: 20
})
    .then((nuevoAutor) => console.log(nuevoAutor))
    .catch((error) => console.log(error));