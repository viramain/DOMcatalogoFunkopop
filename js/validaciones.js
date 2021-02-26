//--- validar campos numericos
export function validarNumeros(numeros) {
    console.log("en funcion validarNumeros()")
    if (numeros.value.trim() != "" && !isNaN(numeros.value)) {
        numeros.className = "form-control is-valid";
        return true;
    } else {
        numeros.className = "form-control is-invalid";
        return false;
    }
}

export function validarTexto(texto) {
    console.log("en funcion validar texto")
    if (texto.value.trim() != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}

// la palabra event puede ser cualquiera
export function validarGeneral(event) {
    event.preventDefault();
    if (validarNumeros(document.getElementById("codigo")) &&
        validarTexto(document.getElementById("nombre")) &&
        validarTexto(document.getElementById("numSerie")) &&
        validarTexto(document.getElementById("categoria")) &&
        validarTexto(document.getElementById("descripcion"))) {
        alert("guarda datos")
            // debo guardar los datos en el array?????
            // limpiarForm();
    } else {
        // debo mostrar error y no mandar mail
        alert("Datos Incorrectos");
    }
}

export function limpiarForm() {
    document.getElementById("formFunkopop").reset();
    document.getElementById("codigo").className = "form-control";
    document.getElementById("nombre").className = "form-control";
    document.getElementById("numserie").className = "form-control";
    document.getElementById("categoria").className = "form-control";
    document.getElementById("descripcion").className = "form-control";
    // cierra la ventana alert si no la cerró manualmente el usuario
    // setTimeout(function() { document.getElementById("mensaje").innerHTML = `<div></div>`; }, 5000);
}