"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(paramNombre, paramApellido, paramPasaporte, paramNacimiento) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.pasaporte = paramPasaporte;
        this.nacimiento = paramNacimiento;
    }
    Seleccion.prototype.getNombre = function () {
        return this.nombre;
    };
    Seleccion.prototype.setNombre = function (paraNombre) {
        this.nombre = paraNombre;
    };
    Seleccion.prototype.getApellido = function () {
        return this.apellido;
    };
    Seleccion.prototype.setApellido = function (paraApellido) {
        this.apellido = paraApellido;
    };
    Seleccion.prototype.getPasaporte = function () {
        return this.pasaporte;
    };
    Seleccion.prototype.setPasaporte = function (paraPasaporte) {
        this.pasaporte = paraPasaporte;
    };
    Seleccion.prototype.getNacimiento = function () {
        return this.nacimiento;
    };
    Seleccion.prototype.setNacimiento = function (paraNacimiento) {
        this.nacimiento = paraNacimiento;
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
