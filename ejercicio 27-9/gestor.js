"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(listadoParam) {
        this.listadoDeLibros = listadoParam;
    }
    GestorLibros.prototype.insertarLibro = function (paramLibro) {
        this.listadoDeLibros.push(paramLibro);
    };
    GestorLibros.prototype.consultarLibro = function (paramLibro) {
        var respuesta = false;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].getLibro() === paramLibro.getLibro()) {
                respuesta = true;
            }
        }
        return respuesta;
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
