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
console.log(typeof myUser3); // object
class miUsuario {
  id: number
  telefono?: string
  email: string

  constructor(_id, _telefono, _email){
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
    "01": {"titulo": "Primer entregable", "nota": 5},
    "02": {"titulo": "Segundo entregable", "nota": 5},
    "03": {"titulo": "Tercer entregable", "nota": 5}
  }
}
console.log(typeof myJson);
const myJsonStr = JSON.stringify(myJson); // object
console.log(myJsonStr)
console.log(typeof JSON.parse(myJsonStr)); // object

console.log(typeof JSON.parse("1"));  // number a pesar de que le pasamos string
// console.log(typeof JSON.parse(1)); // TS no deja hacer esto, hay que pasar string
console.log(typeof JSON.parse("{}")); // object
console.log(typeof JSON.parse("{"));  // SyntaxError 
console.log(typeof JSON.parse("{\"id\":1}")); // object
console.log(typeof JSON.parse("[1, 2, 3]")); // object !!!!!

// Tipos de datos solo de TS

// any := "cualquiera" -> se puede usar cualquier tipo de dato
// se puede usar cuando necesitamos flexibilidad o cuando no sabemos precisar el tipo de dato
let myVar: any = "un dato"; // puede contener cualquier tipo de dato
console.log(myVar, typeof myVar);
myVar = 123;
console.log(myVar, typeof myVar);
myVar = {};
console.log(myVar, typeof myVar);

// unknown := similar al any pero un poco más restrictivo
// se usa cuando no se conoce el tipo de dato que nos llega e - idealmente - se asigna después (el tipo)
let desconocido: unknown = 1;
console.log(typeof desconocido); // en nuestro código de TS es unkwown pero JS no tiene 
                                 // ese tipo => lo coloca como number

// never := "nunca" -> es un tipo de dato muy raro que suele usarse en genéricos o librerías
// si se le asigna valor -> error

let estoNuncaTieneValor: never;

console.log(typeof estoNuncaTieneValor); // en JS -> undefined
// estoNuncaTieneValor = 1 // error

// Arrays

const myArr : string[] = ["1", "2", "3"];  // array de strings
myArr.push("4"); // añadimos string al array
const myArr2: readonly string[] = ["Pepe"] // solo lectura
// myArr2.push("1");
const myArr3 = ["1", "2", "3"]
myArr3.push("4"); // puedo añadir más datos en el array

// Tuplas
// Son arrays tipados con longitud fija

let miTupla: [number, string, object];
miTupla = [1, "Pepe", {"nombre": "Pepe"}]; // no detallamos que tiene el objeto
interface Notas {
  nombre: string,
  mates: number,
  lengua: number, 
  ingles: number 
}
const notas: Notas = {
  nombre: "Pepe",
  mates: 7,
  lengua: 8,
  ingles: 9
}
let miTupla2: [number, string, Notas];
miTupla2 = [1, "Pepe", notas]
console.log(miTupla2);

// tuplas readonly
const miTupla3: readonly [number, string] = [1, "Pepe"];
// miTupla3.push(2) // error -> es solo lectura // TS
// miTupla3[0] = 2; // error -> es solo lectura // TS
// miTupla3 = {} // const no permite reasignar la variable

// names tuples -> tuplas nombradas 
// puedes indicar que es cada campo por claridad
let usuario: [nombre: string, apellido: string] = ["Pepe", "Frog"];
console.log(usuario);
// Ejemplo de destructuración:
const [_nombre, _apellido] = usuario;
console.log(_nombre, _apellido);
// también se puede destructurar con objetos:
const pepe = {
  nombres: "Pepe",
  apellidos: "Rana"
}
const {apellidos, nombres} = pepe;
console.log(nombres, apellidos);

// Propiedades ocultas con Symbol:

let obj = {1: "numero"};
const symbol = Symbol(1);
obj[symbol] = "valor para symbol 1";
console.log(obj[symbol])

for(const i in obj){
  console.log(i, obj[i])
}
// no sale "valor para symbol 1"

JSON.stringify(obj); // '{"1":"numero"}'

// Objetos en TS
// inferencia:
const coche = {
  marca: "Ford",
  matricula: "",
  año: 2025
}
// coche.marca = 1;
const coche2: {marca: string, matricula: string, año: number} = {
  marca: "BMW",
  matricula: "1234 ABC",
  año: 2020
}
// coche2.marca = 1;

// Tipado de índices (llaves):
const coche3: {[id: string]: string} = {};
coche3.año = "2025";
coche3.marca = "Ford";
// todas las llaves son string y todos los valores son string

// enums := listado de valores posibles para alguna propiedad o dato
// no se pueden editar y facilitan el acceso a ciertos datos que deben responder 
// a determinados valores y no "cualquier" valor
// - El código es más claro de leer
// - No puede haber valores incorrectos si la definición del enum es correcta
enum PuntosCardinales {
  Norte, 
  Sur, 
  Este, 
  Oeste
}
const direccionInicial = PuntosCardinales.Norte;

enum Roles {
  Usuario, 
  Cliente,
  Administrador,
  Desarrollador
  // etc
}
const nuevoRol = Roles.Cliente;

enum HTTP_StatusCodes {
  success     = 200, // el proceso ha ido OK
  badRequest  = 400, // petición incorrecta
  serverError = 500
}

const codigoRespuesta = HTTP_StatusCodes.success;
console.log("La petición ha terminado con código:", codigoRespuesta);

// Aliases & Interfaces
// Definimos los tipos para el Car
type CarYear = number
type CarType = string
type CarModel = string
// Usamos los tipos anteriores para crear el obj Car
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}
// Asignamos valores a los tipos necesarios para Car
const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
// Creamos un obj Car con estos datos y tipos correctos:
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// Interfaces
// Interfaz := contrato que debe cumplir un objeto que 
// implementa dicha interfaz (contrato)

interface Rectangle {
  // Propiedades:

  height: number, // requerido (por defecto)
  width: number   // requerido
  area?: number   // opcional
  
  // Métodos:

  // Solo anotamos que DEBEN implementarse estos métodos en 
  // las instancias de los obj que implementan (usan) Rectangle
  
  calcularArea():number, // no está implementado el método
  calcularPerimetro():number // tampoco implementado aquí
  imprimir():void // imprime los datos del obj
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
  calcularArea: function(){
    return this.height * this.width;
  },
  calcularPerimetro: function(){
    return 2 * (this.height + this.width);
  },
  imprimir: function(){
    console.log(`Rectangle [ancho=${this.width}, altura=${this.height}]`);
  }
};

rectangle.imprimir();
// lo siguiente se podría pasar a métodos de Rectangle:
let area: number = rectangle.calcularArea();
let perimetro: number = rectangle.calcularPerimetro();
console.log(`
  Área: ${area} u^2
  Perímetro: ${perimetro} u
  `);
// rectangle.imprimirArea() ... etc...

// Extender interfaces -> ~ herencia

// Supongamos que hacemos una app que tiene polígonos
// Entonces, necesitamos interfaces para:

// Triángulo -> 3 lados
// Cuadrado  -> 4 lados
// Rectángulo -> 4 lados
// Polígono -> n lados
// Etc

interface Poligono {
  readonly caras: number, // no se puede modificar
  base: number,
  altura: number,
  lados: [number, number, number] // 3 lados

  calcularArea(): number,
  calcularPerimetro(): number,
}
interface Triangulo extends Poligono {
  caras: 3, // readonly
}
const triangulo: Triangulo = {
  caras: 3,
  base: 3,
  altura: 4,
  lados: [3, 4, 5],
  calcularArea() {
    return this.base * this.altura / 2
  },
  calcularPerimetro(){
    return this.base + this.altura + this.lados[2];
  }
}

// Union de tipos => OR |

let numStr: number | string = "abc";
numStr = 123;

// Datos que vienen de un form:
let email: null | string;
// lógica para leer datos del form
email = null; // no se obtuvo el dato
// ...
email = "pepe@rana.frog";

// Inicializar como undefined y cambiar a otro tipo de dato:
let cantidad: undefined | number; // undefined
cantidad = undefined;
// ...
cantidad = 100;

// variable con valores determinados: Sr., Sra., Srta...
let tratamiento: "Dn." | "Sr." | "Sra." | "Srta." = "Sr.";

let tipoDeCalle: "Avda." | "Calle" | "Plaza" = "Avda.";

type TipoDeCalle = "Avda." | "C." | "Cll";
let tipoDeCalle2 : TipoDeCalle = "Avda.";

type CodigoError = 400 | 500;
let codigoError: CodigoError = 400;

// Funciones

function sumar2(a: number, b: number): number {
  // habría que validar que no son NaN o Infinity
  // porque ambos son tipo Number válido
  return a + b;
}
sumar2(1, 2); // 3
let num = prompt("Introduce un número:");
sumar2(Number(num), 2); // num podría ser NaN

function sumar3(a:number, b?:number){
  // if(!b){ b = 0 } // lo sustituye el operador ??
  return a + (b ?? 0);
}
sumar3(1); // 1
sumar3(1, 2); // 3
// sumar3(1, 2, 3) // error: no se puede pasar 3 argumentos

function imprimirLinea(longitud = 10): void{
  console.log("-".repeat(longitud));
}
imprimirLinea();   // 10 -
imprimirLinea(20); // 20 -

function add(...rest: number[]) {
  // iterar: for, while, reduce, map
  return rest.reduce((p, c) => p + c, 0);
}
let arr = [1, 2, 3, 4, 5];
let sumaArr = add(...arr);
console.log("Suma:", sumaArr);

// alias de tipo para fn:

type Negate = (value: number) => number;
const cambiarSigno: Negate = (num) => num * -1;

type MiUsuario = {
  nombre: string,
  apellido: string
}

type MiUsuarioType = (nombre: string, apellido: string) => MiUsuario;

const crearUsuario: MiUsuarioType = (nombre, apellido) => {
  const nuevoUsuario = {
    nombre: nombre, 
    apellido: apellido
  }
  return nuevoUsuario;
}

let nuevoUsuario = crearUsuario("Pepe", "Rana");
console.table(nuevoUsuario);

// Casting
// as := como 

// No cambia el tipo de la variable permanentemente
// Solo lo modifica durante la operación realizada

let num2: unknown = 1;
console.log((num2 as number).toFixed(2));
num2 = "2";
console.log((num2 as number).toFixed(2));

let posibleNumero: unknown;
posibleNumero = "3";
console.log(1 + (posibleNumero as number));

// Usando <>
console.log(1 + 2 + (<number>posibleNumero)) // 6 => JS: 33

// unkwon => casting a otro tipo
let str = "2";
console.log(((str as unknown) as number) + 2); // 4 => JS: 44

// Clases

class Usuario2 {
  // public:
  nombre: string
  apellido: string
  email: string
  // private:
  private contraseña: string
  // protegido:
  protected datoProtegido: string
  constructor(_nombre, _apellido, _email?){
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.email = _email || ""
    this.datoProtegido = "Supersafe";
  }
  mostrarContraseña(){
    // si puedo acceder a la contraseña aquí:
    return this.contraseña ?? "******";
  }
}
class UsuarioExtendido extends Usuario2 {
  telefono: string
  readonly nombreCompleto: string

  constructor(_nombre, _apellido, _telefono, _email?){
    super(_nombre, _apellido, _email ?? "No hay email disponible");
    this.telefono = _telefono;
    // readonly solo se puede asignar aquí:
    this.nombreCompleto = `${_nombre}, ${_apellido}`
  }
  mostrarTelefono(){
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
// nuevoUsuario3.nombreCompleto = "algo" // error: readonly => no se puede modificar aquí

// Implementar interfaz en clase

interface CuadradoInterfaz {
  calcularArea: () => number
  calcularPerimetro: () => number
  toString: () => string
}

class Cuadrado implements CuadradoInterfaz {
  lado: number
  constructor(_lado){
    this.lado = _lado
  }
  // La interfaz nos 'obliga' que implementemos estos métodos:
  calcularArea(): number {
    return this.lado ** 2;
  };
  calcularPerimetro(): number {
    return 4 * (this.lado);
  };
  toString(): string {
    return `Cuadrado[lado=${this.lado}]`
  };
}
let nuevoCuadrado = new Cuadrado(10);
nuevoCuadrado.toString()

abstract class Polygon2 {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

// let poligono = new Polygon() // Error: no se puede instanciar Polygon

class Rectangle2 extends Polygon2 {
  protected readonly width: number
  protected readonly height: number

  constructor(_width: number, _height: number) {
    super();
    this.width = _width
    this.height = _height
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
let rectangle2 = new Rectangle2(10, 20);

// Generics
// Los genéricos permiten anotar tipos como "parámetros" y aportan flexibilidad en la creación de objetos, fn...

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
console.log(createPair<string, string>('hello', "hola")); // ['hello', 'hola']
console.log(createPair<number, number>(1, 42)); // [1, 42]

function crearArray3<T>(a:T, b:T, c:T){
  return [a, b, c]
}
crearArray3("a", "b", "c");
crearArray3(1, 2, 3);
// crearArray3(1, "2", true); // error -> solo se permiten los mismos tipos
// crearArray3(1, 2, 3, 4); // error -> solo se permiten 3 elementos

function crearArr2<T extends string | number>(a:T, b:T){
  return [a, b]
}
crearArr2(1, 2);
crearArr2("1", "2");
// crearArr2(true, true); // error: solo se puede usar tipo string o number

// Utilities
// Partial -> campos opcionales
// Required -> campos requeridos
// Record -> tipos de keys y values en obj
// Omit -> quita campos de obj
// Pick -> mantiene algunos campos
// Exclude -> quita ciertos tipos en union
// ReturnType -> toma el tipo del retorno de una fn
// Parameters -> toma el tipo de los params de una fn como array
// Readonly -> tipo para obj con todos los campos solo lectura

// keyof => permite sacar como union las propiedades de un obj, p.e {"nombre": "...", "apellido": ...} => keyof hace el tipo "nombre" | "apellido"

// Operadores
// null y undefined => strictNullChecks en tsconfig

// Optional Chaining => ?. evitar error si el objeto no tiene el campo: algo.campoQueNoExiste // undefined

// Nullish Coalescence => ?? coloca valor por defecto si una variable está undefined o null... p.e: undefined ?? "valor por defecto" no sale como undefined

// Solo TS: Null Assertion: !
// Verifica si un campo es undefined o null: variable!.length no se debe permitir si variables es undefined en ese momento

// Arrays
// noUncheckedIndexedAccess en tsconfig permite evitar que el tipo de dato de un array sea union con undefined:
// arr = [1, 2, 3] debería tener tipo number[] y NO number | undefined

// TS 5

// Template Literal Types (opciones para una variable sin enum)
// let calle: "C." | "C/";

// Index Signature Labels: tipos en keys de obj
// {[key: string]: ...}

