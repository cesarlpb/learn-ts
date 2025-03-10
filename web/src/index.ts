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