export class Funko {
    constructor(codigo, nombre, numSerie, categoria, descripcion, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.numSerie = numSerie;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    //---- Getters -------

    get mostrarCodigo() {
        return this.codigo;
    }
    get mostrarNombre() {
        return this.nombre;
    }
    get mostrarNumSerie() {
        return this.numSerie;
    }
    get mostrarCategoria() {
        return this.categoria;
    }
    get mostrarDescripcion() {
        return this.descripcion;
    }
    get mostrarImagen() {
        return this.imagen;
    }

    //-----Setters------
    set modificarCodigo(nuevoCodigo) {
        this.onoff = nuevoCodigo;
    }
    set modificarNombre(nuevoNombre) {
        this.onoff = nuevoNombre;
    }
    set modificarNumSerie(nuevoNumSerie) {
        this.onoff = nuevoNumSerie;
    }
    set modificarCategoria(nuevaCategoria) {
        this.onoff = nuevaCategoria;
    }
    set modificarDescripcion(nuevoDescripcion) {
        this.onoff = nuevaDescripcion;
    }
    set modificarImagen(nuevaImagen) {
        this.onoff = nuevaImagen;
    }
}