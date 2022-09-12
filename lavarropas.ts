
class lavarropas{
    lavar : boolean;
    estaPrendido:boolean;
    programas:string;

    constructor(lavar : boolean,estaPrendido:boolean,programas:string){
        this.lavar = lavar;
        this.estaPrendido = estaPrendido;
        this.programas = programas;
    }

   
    prendido(){
        if (this.estaPrendido){
        this.estaPrendido = false
        }else{
        this.estaPrendido = true
        }
    }
    

    pausa(){
     console.log("Pulse para reanudar");
    }

    apagado(){
        if (this.estaPrendido){
        this.estaPrendido = true
        }else{
        this.estaPrendido = false
        }
    }
}

let lavarropa = new lavarropas(true,true,"centrifugar");

lavarropa.prendido();
lavarropa.apagado();