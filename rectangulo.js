var rectanculo = /** @class */ (function () {
    function rectanculo(paramBase, paramAltura) {
        this.base = paramBase;
        this.altura = paramAltura;
    }
    rectanculo.prototype.getBase = function () {
        return this.base;
    };
    rectanculo.prototype.getAltura = function () {
        return this.altura;
    };
    rectanculo.prototype.setArea = function () {
        var area = 0;
        area = this.base * this.altura;
        return area;
    };
    rectanculo.prototype.comparacion = function (rectanculo) {
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
    rectanculo.prototype.comprobacion = function () {
        if (this.base === this.altura) {
            console.log("es un cuadrado");
        }
        else {
            console.log("no es un cuadrado");
        }
    };
    rectanculo.prototype.acostado = function () {
        if (this.altura > this.base) {
            console.log("esta parado");
        }
        else {
            console.log("esta acostado");
        }
    };
    return rectanculo;
}());
var hola = new rectanculo(250, 150);
//console.log(hola.getAltura())
//console.log(hola.getBase())
//console.log(hola.setArea())
//console.log(hola.comparacion(50))
//hola.comprobacion()
hola.acostado();
