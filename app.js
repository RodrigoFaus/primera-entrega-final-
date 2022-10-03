// Carga de productos de menu digital de comida 


// Variables donde se va a guardar cada producto creado

let combo1 = ""
let combo2 = ""
let combo3 = ""

// Funcion para crear cada producto


function creoProducto() {

    let principal = prompt("Ingrese principal")
    let acompañamiento = prompt("Ingrese acompañamiento")
    let bebida = prompt("Ingrese bebida")
    let extra = prompt("Ingrese un extra si lo desea")
    let precio = prompt("Ingrese precio del combo")

    if (precio == NaN) {
        return precio == 21
    }
    let showCombo = principal + "+" + acompañamiento + "+" + bebida + "+" + extra + "+" + "$" + precio

    if (extra === "") {
        showCombo = principal + "+" + acompañamiento + "+" + bebida + "+" + "$" + precio
    }

    return showCombo
}

// Bucle para seleccionar que combo asignarle a los productos

let dialogo = prompt("Ingrese el combo que desea cargar 1, 2 o 3")

while (dialogo != null) {
    switch (dialogo) {
        case "1":
            combo1 = `Combo 1: ${creoProducto()}`
            break;
        case "2":
            combo2 = `Combo 2: ${creoProducto()}`
            break;
        case "3":
            combo3 = `Combo 3: ${creoProducto()}`
            break;
        default:
            dialogo == null
            break;
    }

    dialogo = prompt("Ingrese el combo que desea cargar")
}

alert(`Sus combos cargados son: 
${combo1} 
${combo2}
${combo3}`)

