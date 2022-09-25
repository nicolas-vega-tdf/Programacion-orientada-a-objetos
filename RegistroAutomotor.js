var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listadoParametro) {
        this.listadoDeAutos = listadoParametro;
    }
    RegistroAutomotor.prototype.consultarSiExsiste = function (paramAuto) {
        var respuesta = false;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() == paramAuto.getPatente()) {
                respuesta = true;
            }
        }
        return respuesta;
    };
    RegistroAutomotor.prototype.registrarVehiculo = function (paramAuto) {
        this.listadoDeAutos.push(paramAuto);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (paramAuto) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() == paramAuto.getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomotor.prototype.editarVehiculo = function (posicion, patenteParam, marcaParam) {
        this.listadoDeAutos[posicion].setPatente(patenteParam);
        this.listadoDeAutos[posicion].setMarca(marcaParam);
    };
    return RegistroAutomotor;
}());
var Auto = /** @class */ (function () {
    function Auto(patenteParametro, marcaParametro, modeloParametro, anioParametro) {
        this.patente = patenteParametro;
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro;
    }
    Auto.prototype.setAnio = function (paramAnio) {
        this.anio = paramAnio;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.setModelo = function (paramModelo) {
        this.modelo = paramModelo;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setMarca = function (paramMarca) {
        this.marca = paramMarca;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setPatente = function (paramPatente) {
        this.patente = paramPatente;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
var auto1 = new Auto("AAA123", "bmw", "m5", 2020);
var auto2 = new Auto("ABC223", "nisan", "r35", 1980);
var auto3 = new Auto("CDE423", "ferrari", "pista", 2022);
var arregloDeAutos = [auto1, auto2, auto3];
var registroTDF = new RegistroAutomotor(arregloDeAutos);
var auto4 = new Auto("DDD567", "fiat", "palio", 2014);
//No lo encuentra porque no esta registrado 
var respuestaRecibida = registroTDF.consultarSiExsiste(auto4);
console.log(respuestaRecibida);
// Lo registro
registroTDF.registrarVehiculo(auto4);
//Lo vuelvo a buscar
var respuestaRecibida2 = registroTDF.consultarSiExsiste(auto4);
console.log(respuestaRecibida2);
//Edito datos del auto
registroTDF.editarVehiculo(3, "CCC234", "corsa");
console.log(auto4);
