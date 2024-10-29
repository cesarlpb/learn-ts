// Seleccionamos los 20 botones:
const divs = document.querySelectorAll(".row div"); /* array de 20 botones */
let a, b;
let operacionSeleccionada; // "+" -> se guarda hasta click en "=", "C" -> se ejecuta enseguida...

for(let div of divs){
    // console.log(div.innerText)
    div.addEventListener('click', function(){
        let contenido = div.innerText;
        console.group("info:")
            console.log("contenido", "esNumero?", "esOpValida?")
            console.log(contenido, "\t\t", esNumero(contenido), "\t\t", esOperacionValida(contenido));
        console.groupEnd()
        // si es número:
        if(esNumero(contenido)){
            escribir(contenido);
            // guardar número -> a, b
            // si no hay op -> se guarda en a
            registrarNumero();
        } else {
            // Cambio: hay que permitir que solo escriba números y lo demás lo guarde como operación:
            registrarOperacion(contenido);
            // borramos todo del display
            if(contenido != "="){
                borrarTodo();
            }  
        }
    });
}

// Hoisting
function esNumero(contenido) {
    let num = parseInt(contenido);
    if(num == contenido){
        return true;
    }
    return false;
}

const listaOperaciones = {
    // operaciones básicas:
    "+": function sumar(a, b){ return a + b }, 
    "-": function restar(a, b){ return a - b }, 
    "×": function multiplicar(a, b){ return a * b }, 
    "÷": function dividir(a, b){ return a / b },
    // borrar:
    "C": borrarTodo, 
    "<": function borrarCaracter(){
        // leer el display actual
        let valorDisplay = document.getElementById("display");
        // quitas el último caracter 
        // y colocas el valor modificado en el display
        if(valorDisplay.innerText.length > 1){
            valorDisplay.innerText = valorDisplay.innerText.slice(0, valorDisplay.innerText.length - 1);
        } else {
            valorDisplay.innerText = "0";
        }
        
        console.log(valorDisplay.innerText)
    },
    // coma decimal:
    ",": function agregarComaDecimal(){}, 
    // cambiar signo:
    "+/-": function cambiarSigno(){},
    // igual (ejecuta la operación):
    "=": function calcular(){
        
        // assertive clauses -> hacer if descartando lo que no te vale primero
        if(a === undefined){ return; }
        if(b === undefined){ return;}
        if(operacionSeleccionada === undefined){ return; }
        
        // lee a, b y operacionSeleccionada
        // son globales

        // consigue la fn a ejecutar de la op
        const fn = listaOperaciones[operacionSeleccionada] // peligro: nos puede dar undefined si la variable es undefined -> ya no es posible por línea 69

        // realiza la op -> ejecuta la fn 
        const res = fn(a, b)
        // actualiza el display
        let display = document.getElementById("display");
        display.innerText = res; // number -> string
        console.log(a, b, operacionSeleccionada, res)
    }
}

// variable -> operacion actual -> "+" "-" ... 
// a y b para guardar números

// num op num = -> resuelve

// + -> sumar
// - -> restar
// etc

// Se puede conseguir el comportamiento deseado con
// if o switch pero vamos a usar la
// estructura de datos de objeto para introducir su uso => tiempo constante

function registrarNumero(){
    // casting (conversión) -> transformamos string a number:
    let valorDisplay = document.getElementById("display").innerText;
    let num = Number(valorDisplay);
    
    if(operacionSeleccionada){
        
        // si hay a -> guardamos en b
        // reseteamos valores a 0
        b = num;
        
    } else {
        // no hay op seleccionada
        
        // si no hay a -> guardamos en a
        // reseteamos valores a 0
        a = num;
        
    }
    // if(a === undefined || a === 0){
    //     // si no hay a -> guardamos en a
    //     // reseteamos valores a 0
    //     a = num;
    // } else if(b === undefined || b === 0) {
    //     // si hay a -> guardamos en b
    //     // reseteamos valores a 0
    //     b = num;
    // }
    // Si hay valor no se sobreescribe <- ojo
    console.log(a, b)
}

function borrarTodo(){
    // buscar el display
    let valorDisplay = document.getElementById("display");
    // colocar el innerText como "0"
    valorDisplay.innerText = "0";
    console.log("display borrado")
}

function registrarOperacion(op){
    // op para guardar -> "+", "-", "×", "÷"
    const operacionesGuardar = ["+", "-", "×", "÷"];
    // op para realizar enseguida: "C", "<", "+/-", ",", "="
    const operacionesInmediatas = ["C", "<", "+/-", ",", "="];
    if(operacionesGuardar.includes(op)){
        operacionSeleccionada = op;
        console.log("op actual:", operacionSeleccionada);
    } else if (operacionesInmediatas.includes(op)){
        // tomamos la operación del obj con la lista:
        const fn = listaOperaciones[op];
        // realizamos la operación:
        fn();
    }
}

function esOperacionValida(contenido) {
    let operacionesValidas = Object.keys(listaOperaciones);
    return operacionesValidas.includes(contenido);
}

function escribir(dato){
    let contenidoPrevio = document.getElementById("display").innerText;
    // TODO: esto no funciona para la tecla 0
    if(contenidoPrevio == "0"){
        document.getElementById("display").innerText = dato;
    } else {
        document.getElementById("display").innerText += dato;
    }
}

// como hacemos que esta función se aplique a todos los botones?
// 1. seleccionar con JS todos los divs botones
// 2. aplicar esta función generalizada a todos

// TODO: 
/**
 * diferencias dígitos de operaciones > si es digito se escribe, si es op se registra o escribe
 * En caso de = se realiza la operación > si no hay op no se hace nada
 * Funcionalidad de borrar
 * Funcionalidad de coma decimal
 * Funcionalidad de cambio de signo
 * 
 * ---
 * Versión con math.js
 */