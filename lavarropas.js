var lavarropas = /** @class */ (function () {
    function lavarropas(lavar, estaPrendido, programas, pausa) {
        this.lavar = lavar;
        this.estaPrendido = estaPrendido;
        this.programas = programas;
        this.pausa = pausa;
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
    lavarropas.prototype.getPausa = function () {
        return this.pausa;
    };
    lavarropas.prototype.setPausa = function (pPausa) {
        if (pPausa == true) {
            return 1;
        }
        else {
            return 2;
        }
    };
    lavarropas.prototype.getProgramas = function () {
        return this.programas;
    };
    lavarropas.prototype.setProgramas = function (pProgramas) {
        this.programas = pProgramas;
    };
    return lavarropas;
}());
var lavarropa = new lavarropas(true, false, "centrifugar", false);
if (lavarropa.getPrendido() == true) {
    console.log("Esta prendido");
}
else {
    console.log("Esta apagado");
}
if (lavarropa.setPausa(false) == 1) {
    console.log("Esta pausado");
}
else {
    console.log("Pulse 1 para pausar");
}
