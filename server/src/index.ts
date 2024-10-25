// Proyecto calculadora

/**
 * Features:
 * - sumar   -> fn que recibe dos números -> devuelve un número
 * - restar  -> fn que recibe dos números -> devuelve número
 * - multiplicar -> fn que recibe dos números -> devuelve número
 * - dividir -> fn que divide dos números => comprobamos que no dividimos por 0 -> en ese caso devuelve NaN
 **/

import { z } from 'zod';

const NumberSchema = z.number();

/**
 * Calcula la suma de dos números
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} el resultado de la suma 
 */
function sumar(num1: number, num2: number) : number {
    NumberSchema.parse(num1);
    NumberSchema.parse(num2);
    return num1 + num2;
}

/**
 * Calcula la resta de dos números
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} el resultado de la suma 
 */
function restar(num1: number, num2: number) : number {
    NumberSchema.parse(num1);
    NumberSchema.parse(num2);
    return num1 - num2;
}

/**
 * Calcula la multiplicar de dos números
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} el resultado de la suma 
 */
function multiplicar(num1: number, num2: number) : number {
    NumberSchema.parse(num1);
    NumberSchema.parse(num2);
    return num1 * num2;
}

/**
 * Calcula la resta de dos números
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} el resultado de la suma 
 */
function dividir(num1: number, num2: number) : number {
    NumberSchema.parse(num1);
    NumberSchema.parse(num2);
    if (num2 == 0){
        console.error("No se puede dividir por cero");
        return NaN;
    }
    return num1 / num2;
}

// Casos de uso:

console.log("Ejemplos correctos:")

let num1 = 1, num2 = 2;
console.log(sumar(num1, num2))       // 3 
console.log(restar(num1, num2))      // -1
console.log(multiplicar(num1, num2)) // 2
console.log(dividir(num1, num2))     // 0.5

// console.log("Error:")
// console.log(sumar(1, '2'))   // Error
// console.log(dividir(1, 0))   // Error
