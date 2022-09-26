
class lavarropas{
    private estaPrendido:boolean;
    private programa:string;
    private pausa:boolean;
    private marca:string;
    private modelo:number;

    constructor(estaPrendido:boolean, programas:string, pausa:boolean, marca :string , modelo :number ){
        this.estaPrendido = estaPrendido;
        this.programa = programas;
        this.pausa = pausa;
        this.marca = marca;
        this.modelo = modelo;
    }

    getMarca():string{
        return this.marca
    }

    getModelo():number{
        return this.modelo
    }

    getPrendido():boolean{
        return this.estaPrendido ;
    }

    setPrenderApagar():void{
        if (this.estaPrendido === false){
        this.estaPrendido = false
        }else{
        this.estaPrendido = true
        }
    }
    
    getPausa():boolean{
        return this.pausa;
    }

    Pausa(pPausa:boolean):number{
     if(pPausa == true){
        return 1
     }else{
        return 2
     }
    }

    getPrograma():string{
        return this.programa;
    }

    setPrograma(pProgramas:string):void{
        this.programa = pProgramas;
    }
}

let lavarropaLirpol = new lavarropas(true,"centrifugar",false,"lirpol",22270);

if (lavarropaLirpol.getPrendido() == true){
    console.log("Esta prendido");
}else{
    console.log("Esta apagado");
}

if(lavarropaLirpol.Pausa(false) == 1){
    console.log("Esta pausado");
}else{
    console.log("Pulse 1 para pausar");
}