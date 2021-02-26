// importo clases
import { Funko } from "./funkoClass.js";
// importo funciones
import { validarNumeros, validarTexto, validarGeneral, limpiarForm } from "./validaciones.js";

// arreglo global para guardar los objetos
let listaFunkopop = [];

// para que la funcion sea accedible desde el html con la llamada desde el form onsubmit="agregarFunkopop(event)
//se agrega WINDOW
//------ sino, usar addeventlistener desde js
window.agregarFunkopop = function(event) {
    // el objetivo de la funcion es agreegar un funkopop nuevo en localStorsge
    event.preventDefault();
    console.log("estamos dentro de la funcion agregar funkopop");
    // traer los valores del formulario ya validados (despues de validar general)
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let numSerie = document.getElementById("numSerie").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;

    let nuevoFunkopop = new Funko(codigo, nombre, numSerie, categoria, descripcion, imagen);
    listaFunkopop.push(nuevoFunkopop);
    console.log(listaFunkopop);


}