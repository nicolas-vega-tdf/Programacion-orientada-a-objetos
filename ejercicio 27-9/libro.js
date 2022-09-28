"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(paramLibro) {
        this.libro = paramLibro;
    }
    Libro.prototype.getLibro = function () {
        return this.libro;
    };
    Libro.prototype.setLibro = function (pLibro) {
        this.libro = pLibro;
    };
    return Libro;
}());
exports.Libro = Libro;
