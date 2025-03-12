// TS
console.log("Hola mundo");

// inputs
let a: number;
let b: number;
let suma: number;

// código...

a = Number(prompt("Introduce el primer número:"));
b = Number(prompt("Introduce el segundo número:"));

suma = a + b;

console.log("Suma", suma);

function sumar(a: number, b: number) :number {
  return a + b
}

console.log("Suma", sumar(a, b));

// Tipos de datos primitivos (JS => TS):

// Number => number
const PI: number = Math.PI; // 3.141...
// String => string
const nombre: string = "Pepe";
// Boolean => boolean
const myBool: boolean = true;
// BigInt => bigint
const myBigInt: bigint = 1n; // Desde "ES2020" en tsconfig.json
// Symbol => symbol
const mySymbol: symbol = Symbol("my awesome symbol");
const mySymbol2: symbol = Symbol("my awesome symbol");
// cada instancia de Symbol se crea única y se diferencia de otras
console.log(mySymbol == mySymbol2); // false
console.log(mySymbol === mySymbol2); // false
console.log(mySymbol.description == mySymbol2.description); // true -> "my awesome symbol"
// undefined => undefined
const myUndefined: undefined = undefined;
// null => null
const myNull: null = null;
console.log(typeof myNull); // object (bug de JS => TS no lo corrige)
// Object => se usa inferencia o interface
// por inferencia:
const myObj = {
  id: 1,          // number
  llave: "valor"  // string
}
const myObj2: {id: number, llave: string} = myObj;
// con parámetro opcional "teléfono":
const myUser = {
  id: 1,          // requerido
  telefono: "123" // opcional
}
const myUser2: {id: number, telefono?: string} = {
  id: 2,
  // no tiene teléfono
}
// el más adecuado -> interface
// interfaz := contrato que se debe cumplir en la creación de objetos
// Es decir, nos "garantiza" que los datos en un objeto sean correctos
interface Usuario {
  id: number,
  telefono?: string,
  email: string
}
const myUser3: Usuario = {
  id: 3,
  telefono: "",
  email: "algo@mail.com",
}