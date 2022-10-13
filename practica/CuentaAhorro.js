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
exports.CuentaAhorro = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(paramNumeroCuenta, paramCliente) {
        return _super.call(this, paramNumeroCuenta, paramCliente) || this;
    }
    CuentaAhorro.prototype.setSaldominimo = function (paramSaldo) {
        this.saldoMinimo = paramSaldo;
    };
    CuentaAhorro.prototype.getSaldoMinimo = function () {
        return this.saldoMinimo;
    };
    CuentaAhorro.prototype.setInteres = function (paramInteres) {
        this.interesVariable = paramInteres;
    };
    CuentaAhorro.prototype.retirar = function (paramRetiro) {
        var aux = this.saldo - this.saldoMinimo;
        if (aux > paramRetiro)
            this.saldo = this.saldo - paramRetiro;
        console.log("Usted retiro: " + paramRetiro);
    };
    CuentaAhorro.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interesVariable;
    };
    CuentaAhorro.prototype.toString = function () {
        return 'Cliente: ' + this.cliente + '\n' + 'Numero de cuenta: ' + this.numeroCuenta + '\n' + "Con un saldo minimo de: " + this.saldoMinimo + '\n' + 'Contiene un saldo de: ' + '$' + this.saldo + ' y contiene un interes variable.';
    };
    return CuentaAhorro;
}(Cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
