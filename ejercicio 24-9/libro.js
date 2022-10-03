"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(paramLibro, paramAutor, paramGenero) {
        this.libro = paramLibro;
        this.autor = paramAutor;
        if (paramGenero != undefined)
            this.genero = paramGenero;
    }
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getLibro = function () {
        return this.libro;
    };
    Libro.prototype.setLibro = function (pLibro) {
        this.libro = pLibro;
    };
    Libro.prototype.toString = function () {
        return "Libro: " + this.libro + "\n " + "Autor: " + this.autor + "\n" + "Genero: " + this.genero;
    };
    return Libro;
}());
exports.Libro = Libro;
