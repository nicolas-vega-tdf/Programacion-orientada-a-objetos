var lavarropas = /** @class */ (function () {
    function lavarropas(lavar, estaPrendido, programas) {
        this.lavar = lavar;
        this.estaPrendido = estaPrendido;
        this.programas = programas;
    }
    lavarropas.prototype.prendido = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    lavarropas.prototype.pausa = function () {
        console.log("Pulse para reanudar");
    };
    lavarropas.prototype.apagado = function () {
        if (this.estaPrendido) {
            this.estaPrendido = true;
        }
        else {
            this.estaPrendido = false;
        }
    };
    return lavarropas;
}());
var lavarropa = new lavarropas(true, true, "centrifugar");
lavarropa.prendido();
lavarropa.apagado();
