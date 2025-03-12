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
console.log(typeof myNull);
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
