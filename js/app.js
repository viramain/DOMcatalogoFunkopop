// aca estara la logica de admin.js

//declaro variables a usar. Es un arreglo donde almaceno los datos del locolstorage
let listaFunkopop = [];
leerInformacion();

//funcion que trae datos del local storage
function leerInformacion() {
    if (localStorage.length > 0) {
        // extraer datos del localstorage en listafunkopop
        listaFunkopop = JSON.parse(localStorage.getItem("listaFunkoKey"));

        //traer el padre
        let grilla = document.getElementById("grillaFunko");
        // limpiar los datos del contenedor padre
        grilla.innerHTML = "";
        // dibujar la columna de la card
        for (let i in listaFunkopop) {
            let imagen = "";
            if (listaFunkopop[i].imagen === "") {
                // quiero cargar imagen por defecto
                imagen = "thanos.png"
            } else {
                imagen = listaFunkopop[i].imagen;
            }
            let columna = `<div class="col-sm-12 col-md-3 d-flex justify-content-center mb-3">
            <div class="card">
                <img src="/img/productos/${imagen}" class="card-img-top" alt="Funko ${listaFunkopop[i].nombre}">
                <div class="card-body">
                    <h5 class="card-title">${listaFunkopop[i].nombre}</h5>
                    <p class="card-text">${listaFunkopop[i].descripcion}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>`;
            // agregar la columna en el padre del index html
            grilla.innerHTML += columna;
        }
    }
}