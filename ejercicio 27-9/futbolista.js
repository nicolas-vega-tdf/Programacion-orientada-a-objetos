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
exports.Futbolista = void 0;
var seleccion_1 = require("./seleccion");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(paramNombre, paramApellido, paramPasaporte, paramNacimiento) {
        return _super.call(this, paramNombre, paramApellido, paramPasaporte, paramNacimiento) || this;
    }
    Futbolista.prototype.goles = function () {
        var gol = Math.floor(Math.random() * 100);
        return gol;
    };
    return Futbolista;
}(seleccion_1.Seleccion));
exports.Futbolista = Futbolista;
