function sumar(a, b){ return a + b }

function restar(a, b){ return a - b }

function multiplicar(a, b){ return a * b }

function dividir(a, b){ return a / b }

function borrarCaracter(){
    // leer el display actual
    // pasado a variable global

    // quitas el último caracter 
    // y colocas el valor modificado en el display
    if(display.innerText.length > 1){
        display.innerText = display.innerText.slice(0, display.innerText.length - 1);
    } else {
        display.innerText = "0";
    }
    
    console.log(display.innerText)
}

function borrarTodo(){
    // buscar el display
    // pasado a global

    // colocar el innerText como "0"
    display.innerText = "0";

    console.log("display borrado")
}

function agregarComaDecimal(){}

function cambiarSigno(){}

function calcular(){
        
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
    // pasado a global

    display.innerText = res; // number -> string
    console.log(a, b, operacionSeleccionada, res)

    resetearVariables();
}