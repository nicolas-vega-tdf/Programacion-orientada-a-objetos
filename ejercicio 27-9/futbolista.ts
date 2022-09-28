import { Seleccion } from "./seleccion";

export class Futbolista extends Seleccion{
    constructor(paramNombre:string,paramApellido:string,paramPasaporte:number,paramNacimiento:Date){
        super(paramNombre,paramApellido,paramPasaporte,paramNacimiento)
        
    }

    goles():number{
       let gol:number = Math.floor(Math.random()*100);
        return gol;
    }
}