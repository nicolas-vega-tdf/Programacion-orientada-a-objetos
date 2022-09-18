var lavarropas = /** @class */ (function () {
    function lavarropas(lavar, estaPrendido, programas) {
        this.lavar = lavar;
        this.estaPrendido = estaPrendido;
        this.programas = programas;
    }
    lavarropas.prototype.getLavar = function () {
        return this.lavar;
    };
    lavarropas.prototype.setLavar = function (plavar) {
        this.lavar = plavar;
    };
    lavarropas.prototype.getPrendido = function () {
        return this.estaPrendido;
    };
    lavarropas.prototype.setPrendido = function (pPrendido) {
        if (pPrendido === false) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    lavarropas.prototype.setPausa = function () {
        console.log("Pulse para reanudar");
    };
    lavarropas.prototype.getProgramas = function () {
        return this.programas;
    };
    lavarropas.prototype.setProgramas = function (pProgramas) {
        this.programas = pProgramas;
    };
    return lavarropas;
}());
var lavarropa = new lavarropas(true, true, "centrifugar");
