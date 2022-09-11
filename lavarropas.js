var lavarropas = /** @class */ (function () {
    function lavarropas(lavar, prenderApagar, programas) {
        this.lavar = lavar;
        this.prenderApagar = prenderApagar;
        this.programas = programas;
    }
    lavarropas.prototype.prendido = function () {
        console.log("Esta prendido");
    };
    lavarropas.prototype.pausa = function () {
        console.log("Pulse para reanudar");
    };
    lavarropas.prototype.apagado = function () {
        if (this.prenderApagar === false) {
            console.log("Esta apagado");
        }
    };
    return lavarropas;
}());
var lavarropa = new lavarropas(true, true, "centrifugar");
lavarropa.prendido();
lavarropa.apagado();
