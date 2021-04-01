'use strict'

/**
 * Imprimir por consola y en la página.
 *
 * @param  {...any} variables Variables a imprimir
 */
function imprimir(...variables) {
    // Imprimo por consola:
    console.info(...variables);

    // Obtengo el contenedor para la consola buscando
    // el elemento con ID "consola-html" (en el index.html):
    const consola = document.getElementById('consola-html');

    // Creo elemento HTML <hr> para mostrar una línea de
    // separación:
    consola.appendChild(document.createElement('hr'));

    // Creo elemento HTML <pre>:
    const linea = document.createElement('pre');

    // Uno las variables con "join" separando con un espacio
    // y lo asigno al contenido del elemnto HTML <pre> creado:
    linea.innerText = variables.join(' ');

    // Agrego al contenedor "consola":
    consola.appendChild(linea);
}

// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();

class User {
    username = null;
    age = Number(null);
    password = null;
    loggedIn = false;
    constructor(username, password, age, loggedIn) {
        this.username = username;
        this.age = age;
        this.password = password;
        this.loggedIn = loggedIn;
    };
    login(username, password) {
        if (this.username === username && this.password === password) {
            this.loggedIn = true;
            imprimir('Usuario', this.username, 'ha iniciado sesión');

        } else {
            this.loggedIn = false;
            imprimir('Usuario o contraseña incorrecta');
        }
    };
    esMayor() {
        if (age >= 18) {
            imprimir(this.username, 'es mayor de edad');
        } else {
            imprimir(this.username, 'es menor de edad');
        }
    };
};

class UserRol extends User {
    carro = [];
    comprar() {
        if (this.loggedIn && this.esMayor) {
            this.carro.push('producto');
            imprimir(comprador.username, 'ha comprado', this.carro, 'al vendedor', vendedor.username);
        } else {
            imprimir('Usuario no puede comprar');
        }
    };
    vender() {
        if (this.loggedIn && this.esMayor) {
            this.carro.push('producto');
            imprimir(vendedor.username, 'ha vendido', this.carro, 'al comprador', comprador.username);
        } else {
            imprimir('Usuario no puede comprar');
        }
    };
};

class UsuarioEjemplo extends User {
    username = "Marcelo";
    age = Number(41);
    password = "miclave";
};

const usuario = new UsuarioEjemplo();

class UsuarioVendedor extends UserRol {
    username = "marceloVendedor";
    age = Number(21);
    password = "miclaveVendedor";
    loggedIn = false;
};

const vendedor = new UsuarioVendedor();

class UsuarioComprador extends UserRol {
    username = "marceloComprador";
    age = Number(15);
    password = "miclaveComprador";
    loggedIn = false;
};

const comprador = new UsuarioComprador();
