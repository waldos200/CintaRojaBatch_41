// llamamos a nuestra dependencia que se llama request
// request nos permite hacer peticiones http
const request = require('request');

// Destructuracion de mi objeto que se exporto de Banda.js
const { Banda } = require('./Banda');

// declarando mi funcion buscaBanda y recibe un parametro o argumento que se llama nombre  
const buscaBanda = (nombre) => {
    // Retorna una promesa
    return new Promise((resolve, reject) => {
        // URL -> creamos nuestra costante endPoint y concatenamos en valor nombre
        const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;
        // Ejecutamos request
        // request recibe como primer parametro nuestro endPoint  y como segundo parametro recibe un callback function (error, response, body)
        // error me indicara si existe un error
        // response nos da informacion de la peticion (status code)
        // body es todo el objeto es el JSON que recibimos 
        request(endPoint, (error, response, body) => {
            // si no hay errores continuamos
            if (error === null) {
                // Hacemos legible nuestro JSON para js
                // un String a obeto 
                const respuesta = JSON.parse(body);
                // instancia de mi clase bandaç

                // creo constantes basadas en lo aributos del objeto 
                const { strArtist, intFormedYear, strWebsite, strGenre } = respuesta.artists[0];
                /* esto lo teniamos antes y sirve para poder ver como controlar un obeto sin una destructuracion de objetos
                    const banda = new Banda(
                    respuesta.artists[0].strArtist,
                    respuesta.artists[0].intFormedYear,
                    respuesta.artists[0].strWebsite,
                    respuesta.artists[0].strGenre); */
                // instancia de mi clase Banda
                const banda = new Banda(strArtist, intFormedYear, strWebsite, strGenre);
                
                // Resuelve la promesa
                resolve(banda);
            } else {
                reject("No encontre a la banda");
            }
        });
    });
}

buscaBanda("Nirvana")
    .then((banda) => console.log(banda))
    .catch((error) => console.log(error));