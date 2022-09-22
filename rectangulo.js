var rectangulo = /** @class */ (function () {
    function rectangulo(paramBase, paramAltura, paramBase2, paramAltura2) {
        this.base = paramBase;
        this.altura = paramAltura;
        this.segundaAltura = paramAltura2;
        this.segundaBase = paramBase2;
    }
    rectangulo.prototype.getBase = function () {
        return this.base;
    };
    rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    rectangulo.prototype.calcularArea = function () {
        var area = 0;
        area = this.base * this.altura;
        return area;
    };
    rectangulo.prototype.comparar = function () {
        if (this.base > this.segundaBase) {
            return 1;
        }
        else if (this.base < this.segundaBase) {
            return -1;
        }
        else {
            return 0;
        }
    };
    rectangulo.prototype.comprobacion = function () {
        if (this.base === this.altura) {
            console.log("es un cuadrado");
        }
        else {
            console.log("no es un cuadrado");
        }
    };
    rectangulo.prototype.calcularPosicion = function () {
        if (this.altura > this.base) {
            console.log("esta parado");
        }
        else {
            console.log("esta acostado");
        }
    };
    return rectangulo;
}());
var consultar = new rectangulo(80, 150, 70, 50);
console.log(consultar.comparar());
