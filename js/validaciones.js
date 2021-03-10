// USANDO ONBLUR DESDE HTML

// function validarNumeros(numeros) {
//     if (numeros.value.trim() != "" && !isNaN(numeros.value)) {
//         numeros.className = "form-control is-valid";
//         return true;
//     } else {
//         numeros.className = "form-control is-invalid";
//         return false;
//     }
// }

// function validarTexto(texto) {
//     if (texto.value.trim() != "") {
//         texto.className = "form-control is-valid";
//         return true;
//     } else {
//         texto.className = "form-control is-invalid";
//         return false;
//     }
// }
//----------------FIN VALIDACION DESDE HTML----------------------

// OTRA FORMA DE VALIDAR DESDE JS: Agregar eventos desde JS

// Valida numeros desde JS
let inputNum = document.getElementById("codigo");
inputNum.addEventListener("blur", validarNumeros);
export function validarNumeros() {
    if (inputNum.value.trim() != "" && !isNaN(inputNum.value)) {
        // buscar si existe codigo ??????
        inputNum.className = "form-control is-valid";
        return true;
    } else {
        inputNum.className = "form-control is-invalid";
        return false;
    }
}

// como uso la funcion validarTexto para todos los campos texto?????????
// let inputNombre = document.getElementById("nombre");
// inputNombre.addEventListener("blur", function(){validarTexto(inputNombre)});
let inputTexto = document.getElementById("nombre");
inputTexto.addEventListener("blur", validarTexto);


// export function validarTexto(inputTexto) {
export function validarTexto() {
    if (inputTexto.value.trim() != "") {
        inputTexto.className = "form-control is-valid";
        return true;
    } else {
        inputTexto.className = "form-control is-invalid";
        return false;
    }
}
//---------------------------------------------------------------------------------

let inputNroSerie = document.getElementById("numSerie");
inputNroSerie.addEventListener("blur", validarSerie);

export function validarSerie() {
    if (inputNroSerie.value.trim() != "") {
        inputNroSerie.className = "form-control is-valid";
        return true;
    } else {
        inputNroSerie.className = "form-control is-invalid";
        return false;
    }
}

let inputCategoria = document.getElementById("categoria");
inputCategoria.addEventListener("blur", validarCategoria);
export function validarCategoria() {
    if (inputCategoria.value.trim() != "") {
        inputCategoria.className = "form-control is-valid";
        return true;
    } else {
        inputCategoria.className = "form-control is-invalid";
        return false;
    }
}

let inputDescrip = document.getElementById("descripcion");
inputDescrip.addEventListener("blur", validarDescripcion);
export function validarDescripcion() {
    if (inputDescrip.value.trim() != "") {
        inputDescrip.className = "form-control is-valid";
        return true;
    } else {
        inputDescrip.className = "form-control is-invalid";
        return false;
    }
}
//========================================================================0