"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(paramNombre, listadoParam) {
        this.listadoDeLibros = new Array;
        this.nombre = paramNombre;
        if (listadoParam != undefined)
            this.listadoDeLibros = listadoParam;
    }
    GestorLibros.prototype.insertarLibro = function (libro) {
        this.listadoDeLibros.push(libro);
    };
    GestorLibros.prototype.obtenerIndex = function (paramLibro) {
        var respuesta = -1;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].getLibro() === paramLibro) {
                respuesta = i;
            }
        }
        return respuesta;
    };
    GestorLibros.prototype.consultarLibro = function (titulo) {
        if (this.obtenerIndex(titulo) === -1)
            return false;
        return true;
    };
    GestorLibros.prototype.modificarLibro = function (posicion, titulo) {
        this.listadoDeLibros[posicion].setLibro(titulo);
    };
    GestorLibros.prototype.eliminar = function (titulo) {
        if (this.obtenerIndex(titulo) === -1)
            this.listadoDeLibros.splice(this.obtenerIndex(titulo), 1);
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
