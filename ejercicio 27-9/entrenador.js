"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var seleccion_1 = require("./seleccion");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(paramNombre, paramApellido, paramPasaporte, paramNacimiento) {
        return _super.call(this, paramNombre, paramApellido, paramPasaporte, paramNacimiento) || this;
    }
    Entrenador.prototype.titulosObtenidos = function () {
        var titulos = Math.floor(Math.random() * 60);
        return titulos;
    };
    return Entrenador;
}(seleccion_1.Seleccion));
exports.Entrenador = Entrenador;
