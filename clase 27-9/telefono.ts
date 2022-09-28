class Telefono {
    protected estaPrendido: boolean;
    protected bateriaActual: number;

    constructor(paramPrendido:boolean,paramBateria:number){
        this.estaPrendido = paramPrendido;
        this.bateriaActual = paramBateria;
    }

    mandarMensajes(paramMensaje:string):string{
        return paramMensaje
    }

    hacerLlamada(){

    }

    prenderApagar(){
        if (this.estaPrendido === false){
            this.estaPrendido = false
            }else{
            this.estaPrendido = true
        }
    }
}