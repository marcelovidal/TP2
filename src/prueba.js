'use strict;'

class Usuario {
    username = null;
    age = Number(null);
    password = null;
    loggedIn = false;
    constructor(name, age, password, loggedIn) {

        this.username = name;
        this.age = age;
        this.password = password;
        this.loggedIn = loggedIn;
    }


}

class UsuarioRol extends Usuario {
    compraProducto() {
        console.info('Producto comprado', this.username);
    }
    vendeProducto() {
        console.info('Producto comprado', this.username);
    }
}
class Vendedor extends UsuarioRol {
    name = "Marcelo";
    age = Number(41);
    password = "miclave";
    loggedIn = false;
    login() {
        if (this.password) {
            this.loggedIn = true;
            imprimir('Usuario', this.username, 'ha iniciado sesión');
        } else {
            console.log('No ha podido acceder')
        };
    };

    vendeProducto() {
        console.info('Producto vendido', this.username);
    }
}
class Comprador extends UsuarioRol {
    constructor(name, age, password, loggedIn) {
        super(name, age, password, loggedIn);
    }
    compraProducto() {
        console.info('Producto comprado', this.username);
    }
}

const vendedor = new Vendedor();
const comprador = new Comprador('Fermín', 20, 'claveFer', true);