// TS
console.log("Hola mundo");
// inputs
let a;
let b;
let suma;
// código...
a = Number(prompt("Introduce el primer número:"));
b = Number(prompt("Introduce el segundo número:"));
suma = a + b;
console.log("Suma", suma);
function sumar(a, b) {
    return a + b;
}
console.log("Suma", sumar(a, b));
// Tipos de datos primitivos (JS => TS):
// Number => number
const PI = Math.PI; // 3.141...
// String => string
const nombre = "Pepe";
// Boolean => boolean
const myBool = true;
// BigInt => bigint
const myBigInt = 1n; // Desde "ES2020" en tsconfig.json
// Symbol => symbol
const mySymbol = Symbol("my awesome symbol");
const mySymbol2 = Symbol("my awesome symbol");
// cada instancia de Symbol se crea única y se diferencia de otras
console.log(mySymbol == mySymbol2); // false
console.log(mySymbol === mySymbol2); // false
console.log(mySymbol.description == mySymbol2.description); // true -> "my awesome symbol"
// undefined => undefined
const myUndefined = undefined;
// null => null
const myNull = null;
console.log(typeof myNull); // object (bug de JS => TS no lo corrige)
// Object => se usa inferencia o interface
// por inferencia:
const myObj = {
    id: 1,
    llave: "valor" // string
};
const myObj2 = myObj;
// con parámetro opcional "teléfono":
const myUser = {
    id: 1,
    telefono: "123" // opcional
};
const myUser2 = {
    id: 2,
    // no tiene teléfono
};
const myUser3 = {
    id: 3,
    telefono: "",
    email: "algo@mail.com",
};
console.log(typeof myUser3); // object
class miUsuario {
    constructor(_id, _telefono, _email) {
        this.id = _id;
        this.telefono = _telefono;
        this.email = _email;
    }
}
const myUser4 = new miUsuario(1, "", "email");
console.log(typeof myUser4, myUser4 instanceof miUsuario);
// Tipos especiales
// JSON := Javascript Serialized Object Notation
// Las llaves van en comillas dobles
// En valores podemos poner números, arrays, strings, objetos
const myJson = {
    "id": 1,
    "nombre": "Pepe",
    "notas": [6, 8, 9],
    "entregables": {
        "01": { "titulo": "Primer entregable", "nota": 5 },
        "02": { "titulo": "Segundo entregable", "nota": 5 },
        "03": { "titulo": "Tercer entregable", "nota": 5 }
    }
};
console.log(typeof myJson);
const myJsonStr = JSON.stringify(myJson); // object
console.log(myJsonStr);
console.log(typeof JSON.parse(myJsonStr)); // object
console.log(typeof JSON.parse("1")); // number a pesar de que le pasamos string
// console.log(typeof JSON.parse(1)); // TS no deja hacer esto, hay que pasar string
console.log(typeof JSON.parse("{}")); // object
console.log(typeof JSON.parse("{")); // SyntaxError 
console.log(typeof JSON.parse("{\"id\":1}")); // object
console.log(typeof JSON.parse("[1, 2, 3]")); // object !!!!!
// Tipos de datos solo de TS
// any := "cualquiera" -> se puede usar cualquier tipo de dato
// se puede usar cuando necesitamos flexibilidad o cuando no sabemos precisar el tipo de dato
let myVar = "un dato"; // puede contener cualquier tipo de dato
console.log(myVar, typeof myVar);
myVar = 123;
console.log(myVar, typeof myVar);
myVar = {};
console.log(myVar, typeof myVar);
// unknown := similar al any pero un poco más restrictivo
// se usa cuando no se conoce el tipo de dato que nos llega e - idealmente - se asigna después (el tipo)
let desconocido = 1;
console.log(typeof desconocido); // en nuestro código de TS es unkwown pero JS no tiene 
// ese tipo => lo coloca como number
// never := "nunca" -> es un tipo de dato muy raro que suele usarse en genéricos o librerías
// si se le asigna valor -> error
let estoNuncaTieneValor;
console.log(typeof estoNuncaTieneValor); // en JS -> undefined
// estoNuncaTieneValor = 1 // error
// Arrays
const myArr = ["1", "2", "3"]; // array de strings
myArr.push("4"); // añadimos string al array
const myArr2 = ["Pepe"]; // solo lectura
// myArr2.push("1");
const myArr3 = ["1", "2", "3"];
myArr3.push("4"); // puedo añadir más datos en el array
// Tuplas
// Son arrays tipados con longitud fija
let miTupla;
miTupla = [1, "Pepe", { "nombre": "Pepe" }]; // no detallamos que tiene el objeto
const notas = {
    nombre: "Pepe",
    mates: 7,
    lengua: 8,
    ingles: 9
};
let miTupla2;
miTupla2 = [1, "Pepe", notas];
console.log(miTupla2);
// tuplas readonly
const miTupla3 = [1, "Pepe"];
// miTupla3.push(2) // error -> es solo lectura // TS
// miTupla3[0] = 2; // error -> es solo lectura // TS
// miTupla3 = {} // const no permite reasignar la variable
// names tuples -> tuplas nombradas 
// puedes indicar que es cada campo por claridad
let usuario = ["Pepe", "Frog"];
console.log(usuario);
// Ejemplo de destructuración:
const [_nombre, _apellido] = usuario;
console.log(_nombre, _apellido);
// también se puede destructurar con objetos:
const pepe = {
    nombres: "Pepe",
    apellidos: "Rana"
};
const { apellidos, nombres } = pepe;
console.log(nombres, apellidos);
// Propiedades ocultas con Symbol:
let obj = { 1: "numero" };
const symbol = Symbol(1);
obj[symbol] = "valor para symbol 1";
console.log(obj[symbol]);
for (const i in obj) {
    console.log(i, obj[i]);
}
// no sale "valor para symbol 1"
JSON.stringify(obj); // '{"1":"numero"}'
// Objetos en TS
// inferencia:
const coche = {
    marca: "Ford",
    matricula: "",
    año: 2025
};
// coche.marca = 1;
const coche2 = {
    marca: "BMW",
    matricula: "1234 ABC",
    año: 2020
};
// coche2.marca = 1;
// Tipado de índices (llaves):
const coche3 = {};
coche3.año = "2025";
coche3.marca = "Ford";
// todas las llaves son string y todos los valores son string
// enums := listado de valores posibles para alguna propiedad o dato
// no se pueden editar y facilitan el acceso a ciertos datos que deben responder 
// a determinados valores y no "cualquier" valor
// - El código es más claro de leer
// - No puede haber valores incorrectos si la definición del enum es correcta
var PuntosCardinales;
(function (PuntosCardinales) {
    PuntosCardinales[PuntosCardinales["Norte"] = 0] = "Norte";
    PuntosCardinales[PuntosCardinales["Sur"] = 1] = "Sur";
    PuntosCardinales[PuntosCardinales["Este"] = 2] = "Este";
    PuntosCardinales[PuntosCardinales["Oeste"] = 3] = "Oeste";
})(PuntosCardinales || (PuntosCardinales = {}));
const direccionInicial = PuntosCardinales.Norte;
var Roles;
(function (Roles) {
    Roles[Roles["Usuario"] = 0] = "Usuario";
    Roles[Roles["Cliente"] = 1] = "Cliente";
    Roles[Roles["Administrador"] = 2] = "Administrador";
    Roles[Roles["Desarrollador"] = 3] = "Desarrollador";
    // etc
})(Roles || (Roles = {}));
const nuevoRol = Roles.Cliente;
var HTTP_StatusCodes;
(function (HTTP_StatusCodes) {
    HTTP_StatusCodes[HTTP_StatusCodes["success"] = 200] = "success";
    HTTP_StatusCodes[HTTP_StatusCodes["badRequest"] = 400] = "badRequest";
    HTTP_StatusCodes[HTTP_StatusCodes["serverError"] = 500] = "serverError";
})(HTTP_StatusCodes || (HTTP_StatusCodes = {}));
const codigoRespuesta = HTTP_StatusCodes.success;
console.log("La petición ha terminado con código:", codigoRespuesta);
// Asignamos valores a los tipos necesarios para Car
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
// Creamos un obj Car con estos datos y tipos correctos:
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
const rectangle = {
    height: 20,
    width: 10,
    calcularArea: function () {
        return this.height * this.width;
    },
    calcularPerimetro: function () {
        return 2 * (this.height + this.width);
    },
    imprimir: function () {
        console.log(`Rectangle [ancho=${this.width}, altura=${this.height}]`);
    }
};
rectangle.imprimir();
// lo siguiente se podría pasar a métodos de Rectangle:
let area = rectangle.calcularArea();
let perimetro = rectangle.calcularPerimetro();
console.log(`
  Área: ${area} u^2
  Perímetro: ${perimetro} u
  `);
const triangulo = {
    caras: 3,
    base: 3,
    altura: 4,
    lados: [3, 4, 5],
    calcularArea() {
        return this.base * this.altura / 2;
    },
    calcularPerimetro() {
        return this.base + this.altura + this.lados[2];
    }
};
// Union de tipos => OR |
let numStr = "abc";
numStr = 123;
// Datos que vienen de un form:
let email;
// lógica para leer datos del form
email = null; // no se obtuvo el dato
// ...
email = "pepe@rana.frog";
// Inicializar como undefined y cambiar a otro tipo de dato:
let cantidad; // undefined
cantidad = undefined;
// ...
cantidad = 100;
// variable con valores determinados: Sr., Sra., Srta...
let tratamiento = "Sr.";
let tipoDeCalle = "Avda.";
let tipoDeCalle2 = "Avda.";
let codigoError = 400;
// Funciones
function sumar2(a, b) {
    // habría que validar que no son NaN o Infinity
    // porque ambos son tipo Number válido
    return a + b;
}
sumar2(1, 2); // 3
let num = prompt("Introduce un número:");
sumar2(Number(num), 2); // num podría ser NaN
function sumar3(a, b) {
    // if(!b){ b = 0 } // lo sustituye el operador ??
    return a + (b ?? 0);
}
sumar3(1); // 1
sumar3(1, 2); // 3
// sumar3(1, 2, 3) // error: no se puede pasar 3 argumentos
function imprimirLinea(longitud = 10) {
    console.log("-".repeat(longitud));
}
imprimirLinea(); // 10 -
imprimirLinea(20); // 20 -
function add(...rest) {
    // iterar: for, while, reduce, map
    return rest.reduce((p, c) => p + c, 0);
}
let arr = [1, 2, 3, 4, 5];
let sumaArr = add(...arr);
console.log("Suma:", sumaArr);
const cambiarSigno = (num) => num * -1;
const crearUsuario = (nombre, apellido) => {
    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido
    };
    return nuevoUsuario;
};
let nuevoUsuario = crearUsuario("Pepe", "Rana");
console.table(nuevoUsuario);
// Casting
// as := como 
// No cambia el tipo de la variable permanentemente
// Solo lo modifica durante la operación realizada
let num2 = 1;
console.log(num2.toFixed(2));
num2 = "2";
console.log(num2.toFixed(2));
let posibleNumero;
posibleNumero = "3";
console.log(1 + posibleNumero);
// Usando <>
console.log(1 + 2 + posibleNumero); // 6 => JS: 33
// unkwon => casting a otro tipo
let str = "2";
console.log(str + 2); // 4 => JS: 44
// Clases
class Usuario2 {
    constructor(_nombre, _apellido, _email) {
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.email = _email || "";
        this.datoProtegido = "Supersafe";
    }
    mostrarContraseña() {
        // si puedo acceder a la contraseña aquí:
        return this.contraseña ?? "******";
    }
}
class UsuarioExtendido extends Usuario2 {
    constructor(_nombre, _apellido, _telefono, _email) {
        super(_nombre, _apellido, _email ?? "No hay email disponible");
        this.telefono = _telefono;
        // readonly solo se puede asignar aquí:
        this.nombreCompleto = `${_nombre}, ${_apellido}`;
    }
    mostrarTelefono() {
        // this.contraseña; // erorr: el campo privado no aparece en esta clase derivada de la anterior
        // this.datoProtegido; // el dato protected si aparece aquí
        return `${this.telefono}`;
    }
}
let nuevoUsuario2 = new Usuario2("Pepe", "Rana");
console.log(`
  Datos del usuario:
  - Nombre: ${nuevoUsuario2.nombre}
  - Apellido: ${nuevoUsuario2.apellido}
  - Email: ${nuevoUsuario2.email}
  - Contraseña: ${nuevoUsuario2.mostrarContraseña()}
  `);
let nuevoUsuario3 = new UsuarioExtendido("Pepe", "Rana", "123");
console.log(`
  Datos del usuario:
  - Nombre: ${nuevoUsuario3.nombre}
  - Apellido: ${nuevoUsuario3.apellido}
  - Email: ${nuevoUsuario3.email}
  - Contraseña: ${nuevoUsuario3.mostrarContraseña()}
  - Teléfono: ${nuevoUsuario3.telefono}
  `);
console.log(nuevoUsuario3.nombreCompleto);
class Cuadrado {
    constructor(_lado) {
        this.lado = _lado;
    }
    // La interfaz nos 'obliga' que implementemos estos métodos:
    calcularArea() {
        return this.lado ** 2;
    }
    ;
    calcularPerimetro() {
        return 4 * (this.lado);
    }
    ;
    toString() {
        return `Cuadrado[lado=${this.lado}]`;
    }
    ;
}
let nuevoCuadrado = new Cuadrado(10);
nuevoCuadrado.toString();
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
// let poligoono = new Polygon() // Error: no se puede instanciar Polygon
class Rectangle extends Polygon {
    constructor(_width, _height) {
        super();
        this._width = _width;
        this._height = _height;
        this.width = _width;
        this.height = _height;
    }
    getArea() {
        return this.width * this.height;
    }
}
