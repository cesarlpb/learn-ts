import { z } from 'zod';

const NumberSchema = z.number();

/**
 * Calcula la suma de dos números
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} el resultado de la suma 
 */
function sumar(num1: any, num2: any) : number {
    NumberSchema.parse(num1);
    NumberSchema.parse(num2);
    return num1 + num2;
}

// Casos de uso:

console.log("Caso correcto:");
console.log(sumar(1, 2));   // 3 ----- ok
console.log("Error:");
console.log(sumar("1", 2)); // Error