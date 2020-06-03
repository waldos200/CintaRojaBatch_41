// Promesas
// * algo que se va a cmplir en el futuro
// * quiza no se puede cumplir

// Alba => 22 junio
// cumpleaños => pastel (vamos a esperar a tu cumple)
// tenemos que esperar hasta el dia de cumple


// maneras de ver una promesa

// La promesa esta pendiente
// faltan 20 dias para tu cumple

// La promesa se cumple
// Alba => pastel

// la promesa no se cumple
// Alba => Explicacion/Razon (No lo encontre, no estaba abierta la pasteleria, no tenia dinero)

const promesaCumple = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100); // nos devolvera un numero del 0 => 1

    setTimeout(() => {
        if (number >= 50) {
            resolve("🎂");
        } else {
            reject("No pude enregarte tu pastel")
        }
    }, 3000);

});

// .then() cuando la promesa se cumple
// .catch() cuando la promesa o se cumple

promesaCumple
    .then((pastel) => console.log(pastel))
    .catch((razon) => console.log(razon));

// console.log(Math.floor(Math.random() * 100));