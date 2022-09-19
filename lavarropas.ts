
class lavarropas{
    private lavar : boolean;
    private estaPrendido:boolean;
    private programas:string;
    private pausa:boolean;

    constructor(lavar : boolean,estaPrendido:boolean,programas:string,pausa:boolean){
        this.lavar = lavar;
        this.estaPrendido = estaPrendido;
        this.programas = programas;
        this.pausa = pausa
    }

    getLavar():boolean{
        return this.lavar;
    }

    setLavar(plavar:boolean):void{
        this.lavar = plavar;
    }

    getPrendido():boolean{
        return this.estaPrendido ;
    }

    setPrendido(pPrendido:boolean):void{
        if (pPrendido === false){
        this.estaPrendido = false
        }else{
        this.estaPrendido = true
        }
    }
    
    getPausa():boolean{
        return this.pausa;
    }

    setPausa(pPausa:boolean):number{
     if(pPausa == true){
        return 1
     }else{
        return 2
     }
    }

    getProgramas():string{
        return this.programas;
    }

    setProgramas(pProgramas:string):void{
        this.programas = pProgramas;
    }
}

let lavarropa = new lavarropas(true,true,"centrifugar",false);

if (lavarropa.getPrendido() == true){
    console.log("Esta prendido");
}else{
    console.log("Esta apagado");
}

if(lavarropa.setPausa(false) == 1){
    console.log("Esta pausado");
}else{
    console.log("Pulse 1 para pausar");
}