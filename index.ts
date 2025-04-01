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