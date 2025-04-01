function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(1, 2)) // 3
// sumar('1', 2)
// sumar(1, false)

interface Usuario {
    nombre: string,
    apellido: string,
    edad: number
}
const usuario: Usuario = {
    nombre: "Pepe",
    apellido: "Rana",
    edad: 21
}

console.log(usuario)

// Tipos primitivos

let estaLogeado = false;
// estaLogeado = "falso"
// no se puede cambiar el tipo del boolean a string y arroja error por defecto

let num = 2;
let num2 = 3;
sumar(num, num2);

// Ejemplos:
let verdadero: boolean;
verdadero = true;
// verdadero = "true"; // error

let numero: number;
numero = 1;
// numero = "1" // error
let bigInt: bigint;
bigInt = 1n;
// bigInt = 1; // error

let texto: string;
texto = "Texto!";
// texto = 1; // error

let objeto: object; // no se suele utilizar
objeto = {
    key: "value" 
}
// objeto = "objeto"; // error

let symbol: symbol;
symbol = Symbol("symbol");
// symbol = "symbol"; // symbol

let miUndefined: undefined;
miUndefined = undefined;
// miUndefined = "undefined"; // error
let nulo: null;
nulo = null;
// nulo = "nulo"; // error

let arr: number[]; // array de números
arr = [1, 2, 3];
// arr = [1, 2, '3']; // error