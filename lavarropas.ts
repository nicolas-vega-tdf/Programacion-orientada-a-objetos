
class lavarropas{
    private lavar : boolean;
    private estaPrendido:boolean;
    private programas:string;

    constructor(lavar : boolean,estaPrendido:boolean,programas:string){
        this.lavar = lavar;
        this.estaPrendido = estaPrendido;
        this.programas = programas;
    }

    getLavar():boolean{
        return this.lavar
    }

    setLavar(plavar:boolean):void{
        this.lavar = plavar;
    }

    getPrendido():boolean{
        return this.estaPrendido 
    }

    setPrendido(pPrendido:boolean):void{
        if (pPrendido === false){
        this.estaPrendido = false
        }else{
        this.estaPrendido = true
        }
    }
    
    setPausa(){
     console.log("Pulse para reanudar");
    }

    getProgramas():string{
        return this.programas
    }

    setProgramas(pProgramas:string):void{
        this.programas = pProgramas
    }
}

let lavarropa = new lavarropas(true,true,"centrifugar");

