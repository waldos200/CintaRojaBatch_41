let registrate = document.getElementById('registrate');
let login = document.getElementById('login');
let registro = document.getElementById('registro');
let ingreso = document.getElementById('ingreso');

const inscribirse = () => {
    registro.classList.remove('none')
    ingreso.classList.add('none')
}

const Login = () => {
    ingreso.classList.remove('none')
    registro.classList.add('none')
}

registrate.addEventListener('click', inscribirse);
login.addEventListener('click', Login);