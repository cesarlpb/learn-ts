// Seleccionamos los 20 botones:
const divs = document.querySelectorAll(".row div"); /* array de 20 botones */

for(let div of divs){
    // console.log(div.innerText)
    div.addEventListener('click', function(){
        let contenido = div.innerText;
        console.group("info:")
            console.log("contenido", "esNumero?", "esOpValida?")
            console.log(contenido, "\t\t", esNumero(contenido), "\t\t", esOperacionValida(contenido));
        console.groupEnd()
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

const operacionesValidas = [
    // operaciones básicas:
    "+", "-", "×", "÷",
    // borrar:
    "C",
    // coma decimal:
    ",", 
    // cambiar signo:
    "+/-",
    // igual (ejecuta la operación):
    "="
]

function esOperacionValida(contenido) {
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
    console.log(dato);
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