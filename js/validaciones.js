//--- validar campos numericos
function validarNumeros(numeros) {
    if (numeros.value.trim() != "" && !isNaN(numeros.value)) {
        numeros.className = "form-control is-valid";
        return true;
    } else {
        numeros.className = "form-control is-invalid";
        return false;
    }
}

function validarTexto(texto) {
    if (texto.value.trim() != "") {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}


// la palabra event puede ser cualquiera
function validarGeneral(event) {
    console.log("en validar general. cuando presiona boton guardar");
    event.preventDefault();
    if (
        validarNumeros(document.getElementById("codigo")) &&
        validarTexto(document.getElementById("nombre")) &&
        validarTexto(document.getElementById("numSerie")) &&
        validarTexto(document.getElementById("categoria")) &&
        validarTexto(document.getElementById("descripcion"))
    ) {
        // alert("Datos Correctos")
    } else {
        // mostrar alert de sweet alert con mensaje al usuario
        Swal.fire(
            "Error",
            "El FunkopPop No pudo agregarse.",
            "error"
        );
    }
}