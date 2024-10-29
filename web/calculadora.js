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
        } else {
            // Cambio: hay que permitir que solo escriba números y lo demás lo guarde como operación:
            registrarOperacion(contenido);
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
    "C": function borrarTodo(){
        // buscar el display
        let valorDisplay = document.getElementById("display");
        // colocar el innerText como "0"
        valorDisplay.innerText = "0";
        console.log("display borrado")
    }, 
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
    "=": function calcular(){}
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