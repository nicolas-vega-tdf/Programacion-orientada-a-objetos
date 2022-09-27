var Rectangulo = /** @class */ (function () {
    function Rectangulo(paramBase, paramAltura) {
        this.base = paramBase;
        this.altura = paramAltura;
    }
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.calcularArea = function () {
        var area = 0;
        area = this.base * this.altura;
        return area;
    };
    Rectangulo.prototype.comprobacion = function () {
        if (this.base === this.altura) {
            console.log("es un cuadrado");
        }
        else {
            console.log("no es un cuadrado");
        }
    };
    Rectangulo.prototype.calcularPosicion = function () {
        if (this.altura > this.base) {
            console.log("esta parado");
        }
        else {
            console.log("esta acostado");
        }
    };
    return Rectangulo;
}());
var Comparar = /** @class */ (function () {
    function Comparar(param) {
        this.rectangulos = param;
    }
    Comparar.prototype.comparar = function (arreglo) {
        var respuesta = 0;
        for (var i = 0; i < this.rectangulos.length; i++) {
            if (this.rectangulos[i].getBase() > arreglo.getBase()) {
                respuesta = 1;
            }
            else if (this.rectangulos[i].getBase() < arreglo.getBase()) {
                respuesta = 2;
            }
        }
        return respuesta;
    };
    return Comparar;
}());
var rectangulo1 = new Rectangulo(80, 150);
var rectangulo2 = new Rectangulo(20, 70);
var arregloDeRectangulos = [rectangulo1, rectangulo2];
var comparar1 = new Comparar(arregloDeRectangulos);
var respuesta = comparar1.comparar(rectangulo2);
console.log(respuesta);
