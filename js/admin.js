// ----- importo clases
import { Funko } from "./funkoClass.js";
// ----- importo funciones
// import { validarGeneral } from "./validaciones.js";


// CREA arreglo global para guardar los objetos
let listaFunkopop = [];

//--------------- trabajar con ventana modal-----------
// defino ventana modal en una variable global
const modalFunko = new bootstrap.Modal(
    document.getElementById("modalProducto")
);

// queremos que el boton agregar escuche el evento click y muestre la ventana modal
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
    // mostrar ventana modal
    modalFunko.show();
});
//-------------------------------------------------------

// buscar los datos del localstorage
leerDatos();

// para que la funcion sea accedible desde el html con la llamada desde el form onsubmit="agregarFunkopop(event)
//se agrega WINDOW sino, usar addeventlistener desde js
window.agregarFunkopop = function(event) {
    // validar general antes de almacenar en localstorage
    validarGeneral(event);

    // el objetivo de la funcion es agreegar un funkopop nuevo en localStorsge
    event.preventDefault();
    // traer los valores del formulario ya validados (despues de validar general)
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let numSerie = document.getElementById("numSerie").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;

    //crea nuevo objeto
    let nuevoFunkopop = new Funko(
        codigo,
        nombre,
        numSerie,
        categoria,
        descripcion,
        imagen
    );
    // Agregar nuevo objeto en el arreglo de objetos "listaFunkopop"
    listaFunkopop.push(nuevoFunkopop);
    console.log(listaFunkopop);

    //guardar datos en LOCAL STORAGE en formato json
    localStorage.setItem("listaFunkoKey", JSON.stringify(listaFunkopop));

    //limpiar el formulario
    limpiarFormulario();

    // mostrar alert de sweet alert con mensaje al usuario
    Swal.fire(
        "Nuevo Producto",
        "El FunkopPop se agregó correctamente",
        "success"
    );

    // cerrar la ventana modal usando bootstrap
    modalFunko.hide();
};
//-------------- fin seccion WINDOW -----------------------------




function limpiarFormulario() {
    // estamos reseteando los valores del formulario
    let formulario = document.getElementById("formFunkopop");
    formulario.reset();

    document.getElementById("codigo").className = "form-control";
    document.getElementById("nombre").className = "form-control";
    document.getElementById("numSerie").className = "form-control";
    document.getElementById("categoria").className = "form-control";
    document.getElementById("descripcion").className = "form-control";
}

// si hay datos almacenados, no sobreescribe, sino que agrega al final
function leerDatos() {
    console.log("en leer datos");
    if (localStorage.length > 0) {
        // traer datos del localstorage
        let _listaFunkopop = JSON.parse(localStorage.getItem("listaFunkoKey"));
        console.log(_listaFunkopop);
    }
}