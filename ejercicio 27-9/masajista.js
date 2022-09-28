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
exports.Masajista = void 0;
var seleccion_1 = require("./seleccion");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(paramNombre, paramApellido, paramPasaporte, paramNacimiento, paramcertificado) {
        var _this = _super.call(this, paramNombre, paramApellido, paramPasaporte, paramNacimiento) || this;
        _this.certificado = paramcertificado;
        return _this;
    }
    Masajista.prototype.getCertificado = function () {
        return this.certificado;
    };
    Masajista.prototype.setCertificado = function (pCertificado) {
        this.certificado = pCertificado;
    };
    return Masajista;
}(seleccion_1.Seleccion));
exports.Masajista = Masajista;
