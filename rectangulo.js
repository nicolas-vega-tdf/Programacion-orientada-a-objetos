var rectangulo = /** @class */ (function () {
    function rectangulo(paramBase, paramAltura) {
        this.base = paramBase;
        this.altura = paramAltura;
    }
    rectangulo.prototype.getBase = function () {
        return this.base;
    };
    rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    rectangulo.prototype.setArea = function () {
        var area = 0;
        area = this.base * this.altura;
        return area;
    };
    rectangulo.prototype.comparacion = function (rectanculo) {
        if (rectanculo > this.base) {
            return 1;
        }
        else if (rectanculo < this.base) {
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
    rectangulo.prototype.acostado = function () {
        if (this.altura > this.base) {
            console.log("esta parado");
        }
        else {
            console.log("esta acostado");
        }
    };
    return rectangulo;
}());
var consultar = new rectangulo(50, 150);
consultar.getAltura();
consultar.getBase();
consultar.setArea();
consultar.comparacion(50);
consultar.comprobacion();
consultar.acostado();
