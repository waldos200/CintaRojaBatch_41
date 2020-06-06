// CRUD (DB)
// Create
// Read
// Update
// Delete

/* const request = require('request');
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
    .catch((error) => console.log(error)); */

const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

/*
  1.- Escribe una función que reciba como parámetros nombre,
      nacionalidad, biografía, género y edad para hacer una
      petición a la API para crear un autor nuevo.
      La función debe retornar el autor nuevo en una promesa. */
const createAuthor = (nombre, apellido, biografia, genero, edad) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI;

    const jsonSend = {
        name: nombre,
        last_name: apellido,
        nacionalidad: "MX",
        biography: biografia,
        gender: genero,
        age: edad
    }

    return new Promise((resolve, reject) => {
        request.post(ENDPOINT, { form: jsonSend }, (err, response, body) => {
            if (response.statusCode === 201 && !err) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(response.statusCode);
            }
        });
    });
}

// createAuthor('Nombre', 'Apellidos', 'Biografia', 'F', 89)
//   .then(author => console.log(author.id))
//   .catch(err => console.log(err))

/*
  2.- Escribe una función que reciba como parámetro un ID
      para realizar una petición a la API para hallar un
      autor con el ID especificado. La función debe retornar
      una promesa con la respuesta del servidor. */
const getAuthorByID = (id) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + id;

    return new Promise((resolve, reject) => {
        request.get(ENDPOINT, (err, response, body) => {
            if (response.statusCode === 200 && !err) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(response.statusCode);
            }
        });
    });
}

// getAuthorByID(6625)
//   .then(author => console.log(author))
//   .catch(err => console.log(err))

/*
  3.- Escribe una función que reciba como parámetros nombre,
      nacionalidad, biografía, género y edad para hacer una
      petición a la API para modificar un autor existente.
      Al ejecutar La función, esta debe retornar el autor
      modificado en una promesa. */

const updateAuthor = (id, nombre, apellido, biografia, genero, edad) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + id + '/';

    const jsonSend = {
        id: id,
        name: nombre,
        last_name: apellido,
        nacionalidad: "MX",
        biography: biografia,
        gender: genero,
        age: edad,
        is_alive: true
    }

    return new Promise((resolve, reject) => {
        request({
            method: "PUT",
            uri: ENDPOINT,
            json: jsonSend
        }, (err, response, body) => {
            if (response.statusCode === 200 && !err) {
                const json = body;
                resolve(json);
            } else {
                reject(response.statusCode);
            }
        });
    });
}

// updateAuthor(6533, 'Nombre', 'Apellidos', 'Biografia', 'F', 89)
//   .then(author => console.log(author))
//   .catch(err => console.log(JSON.parse(err.body)))

/*
  4.- Escribe una función que reciba como parámetro un ID
      para realizar una petición a la API para eliminar un
      autor con el ID especificado. La función debe retornar
      una promesa con la respuesta del servidor.*/

const deleteAuthorByID = (id) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + id + '/';

    return new Promise((resolve, reject) => {
        request.delete(ENDPOINT, (err, response) => {
            if (response.statusCode === 204 && !err) {
                resolve(`${response.statusCode} ${response.statusMessage}`);
            } else {
                reject(response.statusCode);
            }
        });
    });
}

// deleteAuthorByID(6533)
//   .then(author => console.log(author))
//   .catch(err => console.log(JSON.parse(err)))

/*
  5.- Encadenando promesas, es decir, usando las funciones
      que escribiste en los puntos previos, debes:
      crear, modificar y eliminar un autor.
*/

createAuthor('Nombre', 'Apellidos', 'Biografia', 'F', 89)
    .then((createdAuthor) => {
        console.log('ID Autor creado');
        console.log(createdAuthor);
        getAuthorByID(createdAuthor.id)
            .then((author) => {
                console.log('Autor buscado');
                console.log(author);
                updateAuthor(author.id, 'Otro nombre', 'Otros apellidos', 'Otra biografia', 'M', 100)
                    .then((updatedAuthor) => {
                        console.log('Autor modificado');
                        console.log(updatedAuthor);
                        deleteAuthorByID(updatedAuthor.id)
                            .then((deletedAuthor) => {
                                console.log('Autor eliminado');
                                console.log(deletedAuthor);
                            }).catch((error) => console.log("Error al crear autor", error))
                    }).catch((error) => console.log("Error al obtener autor", error))
            }).catch((error) => console.log("Error al modificar autor", error))
    }).catch((error) => console.log("Error al elminar autor", error));