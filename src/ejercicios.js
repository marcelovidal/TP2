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

// =====================================================
// 1. Crea una Clase para definir a un Usuario genérica.
// Definir la clase "User".
//
// Debe tener las siguientes características:
//   - "username": Nombre de usuario.
//     Propiedad texto (String).
//     Default: null.
//   - "age": Edad.
//     Propiedad numérica (Number).
//     Default: null.
//   - "password": Contraseña.
//     Propiedad texto (String).
//     Default: null.
//   - "loggedIn": Usuario logueado?
//     Propiedad Booleano (Boolean).
//     Default: false (Falso).
//   - "login(): Debe definirse un método que
//     establezca la propiedad "loggedin" en
//     `true` cuando el valor que se pasa por
//     parámetro es igual al 'password' de la
//     instancia actual.
//     Al llamar al método "login()", debe imprimirse el
//     texto 'Usuario [username] ha iniciado sesión' si
//     el 'password' ingresado es correcto, o el texto
//     'Contraseña incorrecta' si la misma es
//     incorrecta.



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
    }

}
class UsuarioEjemplo extends User {
    username = "Marcelo";
    edad = Number(41);
    password = "miclave";
    loggedIn = false;
    login() {
        if (this.password) {
            this.loggedIn = true;
            imprimir('Usuario', this.username, 'ha iniciado sesión');
        } else {
            console.log('No ha podido acceder')
        }
    };
}


const usuario = new UsuarioEjemplo();


// =====================================================
// 2. Crear la clase "Vendedor" a partir de la clase
// "User".
//
// Ahora, el Vendedor debe poder generar una venta.
// Para ello, se debe agregar un método "vender" al cuál
// se le indique una descripción del producto vendido
// por parámetro. Las ventas deben guardarse en un array
// de ventas interno de la instancia.
//
// Para poder realizar la acción de "vender", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Documentación recomendada:
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push





class UsuarioVendedor extends User {
    username = "Marcelo Vendedor";
    edad = Number(21);
    password = "miclaveVendedor";
    loggedIn = false;

    login() {
        if (this.password) {
            this.loggedIn = true;
            imprimir('Usuario', this.username, 'ha iniciado sesión');
        } else {
            console.log('No ha podido acceder')
        };
    };
    carro = [];
    vender() {
        if (this.username) {
            this.loggedIN = true;
            this.carro.push('uva');
            imprimir('El vendedor', this.username, 'ha vendido', this.carro);
        } else {
            imprimir('El vendedor', this.username, 'no ha realizado ventas', this.carro);
        };
    };

};


const vendedor = new UsuarioVendedor();


// =====================================================
// 3. Crear la clase "Comprador" a partir de la clase
// "User".
// Ahora, el Comprador debe poder generar una compra.
// Para ello, se debe agregar un método "comprar",
// al cuál se le indique una instancia de Vendedor
// que será quien le ha vendido el producto, y una
// descripción del producto vendido.
//
// Para poder realizar la cción de "comprar", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Desde el metodo "comprar" se debe agregar el
// producto vendido al vendedor, e imprimir el siguiente
// texto de ejemplo:


class UsuarioComprador extends User {
    username = "Marcelo Comprador";
    edad = Number(15);
    password = "miclaveComprador";
    loggedIn = false;
    login() {
        if (this.password) {
            this.loggedIn = true;
            imprimir('Usuario', this.username, 'ha iniciado sesión');
        } else {
            console.log('No ha podido acceder')
        };
    };
    objVende = {
        username = "Marcelo Vendedor",
    }
    product = [];
    comprar(objVende, product) {
            //verifico que el comprador este logueado
            if (this.loggedIn) {
                // asigno la compra al objeto vendedor
                objVende.vender(product);
                // impresion de la compra
                imprimir([
                    'El vendedor ' + objVende.username,
                    ' ha vendido ' + product,
                    ' a ' + this.username,
                ]);
            }
        }
        // carro = [];
        // comprar(objVendedor, carro) {
        //     objVendedor = "Marcelo Vendedor";
        //     carro = [];
        //     if (this.username) {
        //         this.loggedIN = true;
        //         this.carro.push('uva');
        //         imprimir('El cliente', this.username, 'ha comprado', this.carro, 'al vendedor', this.objVendedor);
        //     } else {
        //         imprimir('El cliente', this.username, 'no ha realizado ninguna compra', this.carro);
        //     };

    // };

}

const comprador = new UsuarioComprador('Marcelo Comprador', 'miclaveComprador', 14, true);




// =====================================================
// 4. Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".


// =====================================================
// 5. Modificar las clases anteriores y agregar un
// método "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).

// =====================================================
// 6. Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".

class Figura {
    rellenar() {
        console.info('Pintando figura');
    }
    dibujar() {
        console.info('Dibujando')
        this.rellenar();
    }
}
class Cuadrado extends Figura {

    dibujar() {
        console.info('Dibujando un cuadrado')
        this.rellenar();
    }
}
const fig = new Figura();
const cua = new Cuadrado();
