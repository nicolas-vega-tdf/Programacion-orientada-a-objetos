
class lavarropas{
    lavar : boolean;
    prenderApagar:boolean;
    programas:string;

    constructor(lavar : boolean,prenderApagar:boolean,programas:string){
        this.lavar = lavar;
        this.prenderApagar = prenderApagar;
        this.programas = programas;
    }

    prendido(){
     console.log("Esta prendido");
    }

    pausa(){
     console.log("Pulse para reanudar");
    }

    apagado(){
     console.log("Esta apagado");
    }
}

let lavarropa = new lavarropas(true,true,"centrifugar");

lavarropa.prendido();
lavarropa.apagado();