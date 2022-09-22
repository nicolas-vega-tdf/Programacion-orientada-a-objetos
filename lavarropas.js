var lavarropas = /** @class */ (function () {
    function lavarropas(estaPrendido, programas, pausa, marca, modelo) {
        this.estaPrendido = estaPrendido;
        this.programa = programas;
        this.pausa = pausa;
        this.marca = marca;
        this.modelo = modelo;
    }
    lavarropas.prototype.getMarca = function () {
        return this.marca;
    };
    lavarropas.prototype.getModelo = function () {
        return this.modelo;
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
    lavarropas.prototype.Pausa = function (pPausa) {
        if (pPausa == true) {
            return 1;
        }
        else {
            return 2;
        }
    };
    lavarropas.prototype.getPrograma = function () {
        return this.programa;
    };
    lavarropas.prototype.setPrograma = function (pProgramas) {
        this.programa = pProgramas;
    };
    return lavarropas;
}());
var lavarropaLirpol = new lavarropas(true, "centrifugar", false, "lirpol", 22270);
if (lavarropaLirpol.getPrendido() == true) {
    console.log("Esta prendido");
}
else {
    console.log("Esta apagado");
}
if (lavarropaLirpol.Pausa(false) == 1) {
    console.log("Esta pausado");
}
else {
    console.log("Pulse 1 para pausar");
}
