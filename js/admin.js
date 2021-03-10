// ----- importo clases y funciones
import { Funko } from "./funkoClass.js";
import { validarTexto, validarNumeros, validarSerie, validarDescripcion, validarCategoria } from "./validaciones.js";

// CREA arreglo global para guardar los objetos
let listaFunkopop = [];

//--------------- trabajar con ventana modal-----------
// defino ventana modal en una variable global
const modalFunko = new bootstrap.Modal(
    document.getElementById("modalProducto")
);

//crear variable booleana para indicar si modifica o agrega funko
// FALSE= agregar, TRUE= modificar
let modificarFunko = false;

// FUNCION ANONIMA: queremos que el boton agregar escuche el evento click y muestre la ventana modal
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
    // mostrar ventana modal
    limpiarFormulario();
    modalFunko.show();
    // document.getElementById("tituloModal").innerHTML = `<h5 class="modal-title" id="tituloModal">Agregar Producto</h5>`
});

// buscar los datos del localstorage
leerDatos();

function agregarFunkopop() {
    // el objetivo de la funcion es agreegar un funkopop nuevo en localStorsge
    // ------------- validar general ------------------
    if (
        validarNumeros(document.getElementById("codigo")) &&
        validarTexto(document.getElementById("nombre")) &&
        validarSerie(document.getElementById("numSerie")) &&
        validarCategoria(document.getElementById("categoria")) &&
        validarDescripcion(document.getElementById("descripcion"))
    ) { // SI TODOS LOS DATOS ESTA BIEN INGRESADOS:
        // traer los valores del formulario ya validados (despues de validar general)
        let codigo = document.getElementById("codigo").value.trim();
        let nombre = document.getElementById("nombre").value;
        let numSerie = document.getElementById("numSerie").value;
        let categoria = document.getElementById("categoria").value;
        let descripcion = document.getElementById("descripcion").value;
        let imagen = document.getElementById("imagen").value;

        //crea nuevo objeto con el producto ingresado
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

        //guardar datos en LOCAL STORAGE en formato json usando JSON.stringify (formato texto)
        localStorage.setItem("listaFunkoKey", JSON.stringify(listaFunkopop));

        //limpiar el formulario
        limpiarFormulario();

        // mostrar alert de sweet alert con mensaje al usuario
        Swal.fire(
            "Nuevo Producto",
            "El FunkopPop se agregó correctamente",
            "success"
        );
        // llamar a leer datos del local storage para ver si hay algo almacenado
        leerDatos();

        // cerrar la ventana modal usando bootstrap
        modalFunko.hide();
    } else {
        // mostrar alert de sweet alert con mensaje al usuario
        Swal.fire(
            "Error",
            "El FunkopPop No pudo agregarse.",
            "error"
        );
    }
    //-------- FIN VALIDACION GENERAL ---------------------
};

function limpiarFormulario() {
    // estamos reseteando los valores del formulario
    let formulario = document.getElementById("formFunkopop");
    formulario.reset();
    modificarFunko = false;

    document.getElementById("codigo").className = "form-control";
    document.getElementById("nombre").className = "form-control";
    document.getElementById("numSerie").className = "form-control";
    document.getElementById("categoria").className = "form-control";
    document.getElementById("descripcion").className = "form-control";
}

// si hay datos almacenados en el local storage, no sobreescribe, sino que agrega al final
function leerDatos() {
    if (localStorage.length > 0) {
        // traer datos del localstorage con formato de objeto usando JSON.parse
        let _listaFunkopop = JSON.parse(localStorage.getItem("listaFunkoKey"));
        console.log(_listaFunkopop);
        // si el arreglo de listafunkopop esra vacio le cargo los productos del localstarage
        if (listaFunkopop.length === 0) {
            listaFunkopop = _listaFunkopop;
        }
        //dibujar tabla. Agrega a la tabla cada producto almacenado en el local storage
        dibujarTabla(_listaFunkopop);
    }
}

function dibujarTabla(_listaFunkopop) {
    // traer el padre de las filas TBODY
    let tablaFunko = document.getElementById("tablaFunko");
    // variable donde voy a crear la fila TR
    let filaFunko = "";
    //limpiar los datos del tbody
    tablaFunko.innerHTML = "";

    // for (let i = 0; i < _listaFunkopop.length; i++) {}

    // FOR IN trabaja en todas las posiciones del arreglo, 1 por 1, sin saltar nada
    for (let i in _listaFunkopop) {
        // crear la fila
        filaFunko = `<tr>
        <th scope="row">${_listaFunkopop[i].codigo}</th>
        <td>${_listaFunkopop[i].nombre}</td>
        <td>${_listaFunkopop[i].numSerie}</td>
        <td>${_listaFunkopop[i].categoria}</td>
        <td>${_listaFunkopop[i].descripcion}</td>
        <td>${_listaFunkopop[i].imagen}</td>
        <td>
            <button class="btn btn-warning" onclick="preparDatosFunko(this)" id="${_listaFunkopop[i].codigo}">Editar</button>
            <button class="btn btn-danger" onclick="eliminarFunkopop(this)" id="${_listaFunkopop[i].codigo}">Eliminar</button>
        </td>
    </tr>`;
        //agregar la fila al elemento padre
        tablaFunko.innerHTML += filaFunko;
    }
}

// para que la funcion sea accedible desde el html se agrega WINDOW sino, usar addeventlistener desde js
// WINDOW es una funcion que se pueda ver desde JS cuando uso module
window.eliminarFunkopop = function(boton) {
    console.log(boton.id);
    Swal.fire({
        title: 'Esta seguro de eliminar el funkopop',
        text: "No puedes volver atras luego de este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        // if(true === true) Si presiona boton OK para borrar
        if (result.isConfirmed) {
            // aqui agregar el codigo para eliminar un funkopop usando funcion anonima. 
            // defino un arreglo funkopopFiltrados, donde tendre los elementos resultantes del filtrados
            // filter(condicion logica)
            // "producto" es cada elemento dentro del arreglo. Se usa cualquier palabra xa designarla
            // Return para retornar condicion logica
            // el CODIGO esta almacenado en boton.id

            // let funkopopFiltrados = listaFunkopop.filter(function (producto){
            //   return producto.codigo != boton.id
            // });

            // USANDO FUNCION EN FORMA DE FLECHA:
            let funkopopFiltrados = listaFunkopop.filter(producto => producto.codigo != boton.id);
            // igualar los arreglos. para tener los nuevos resultados
            listaFunkopop = funkopopFiltrados;
            // guardar los datos en Localstorage
            localStorage.setItem('listaFunkoKey', JSON.stringify(listaFunkopop));
            // llamar a la funcion leer datos para mostrar en pantalla los nuevos datos del localstorage
            leerDatos();
            Swal.fire(
                'Producto borrado',
                'El funkopop seleccionado fue eliminado',
                'success'
            )
        }
    })
}

//Como llamo la funcion desde HTML, uso WINDOW para que la reconozca como funcion 
window.preparDatosFunko = function(boton) {
    // ver el codigo del renglon seleccionado
    console.log(boton.id);
    // buscar el objeto del arreglo listaFunkopop o en el localtorage
    // let funkoEncontrado = listaFunkopop.find( function (producto) {
    //   return producto.codigo === boton.id;
    // })

    // funkoEncontrado es un objeto con el elemento encontrado. Uso FIND xq solo tengo que buscar 1 elemento. 
    //FIND devuelve el primer objeto que cumple la condicion logica. si hay mas no los busca.
    let funkoEncontrado = listaFunkopop.find(producto => producto.codigo === boton.id);
    console.log(funkoEncontrado);

    // cargar en el formulario todos los datos
    document.getElementById('codigo').value = funkoEncontrado.codigo;
    //se puede asignar propiedad de NO MODIFICAR al codigo?
    document.getElementById('nombre').value = funkoEncontrado.nombre;
    document.getElementById('numSerie').value = funkoEncontrado.numSerie;
    document.getElementById('categoria').value = funkoEncontrado.categoria;
    document.getElementById('descripcion').value = funkoEncontrado.descripcion;
    document.getElementById('imagen').value = funkoEncontrado.imagen;

    // quiero modificar funko
    modificarFunko = true;
    // mostrar el formulario con los datos seleccionados en la ventana modal
    modalFunko.show();
}

// event del onsubmit del form
window.guardarDatos = function(event) {
    event.preventDefault();
    console.log("desde la funcion guardarDatos");
    // if modificarFunko===true
    if (modificarFunko) {
        // modificar funkopop existente
        modificarFunkoExistente();
    } else {
        // agregar nuevo funkopop
        agregarFunkopop();
    }
}

//actualiza datos de un funko existente
function modificarFunkoExistente() {
    // busco el objeto a editar. Traigo los valores del formulario y los pongi en variables
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let numSerie = document.getElementById("numSerie").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;

    for (let i in listaFunkopop) {
        if (listaFunkopop[i].codigo === codigo) {
            // modificar los datos
            listaFunkopop[i].nombre = nombre;
            // es igual a poner listaFunkopop[i].nombre = document.getElementById("nombre").value;
            listaFunkopop[i].numSerie = numSerie;
            listaFunkopop[i].categoria = categoria;
            listaFunkopop[i].descripcion = descripcion;
            listaFunkopop[i].imagen = imagen;
        }
    }
    // guardar arreglo actualizado en localstorage
    localStorage.setItem("listaFunkoKey", JSON.stringify(listaFunkopop));
    //mostrar alerta de modificacion realizada
    Swal.fire(
        "Producto Modificado",
        "El FunkopPop se actualizó correctamente",
        "success"
    );
    //cerrar ventana modal
    modalFunko.hide();
    // volver a dibujar la tabla
    leerDatos();
}