import { Seleccion } from "./seleccion";

export class Entrenador extends Seleccion{
    constructor(paramNombre:string,paramApellido:string,paramPasaporte:number,paramNacimiento:number){
        super(paramNombre,paramApellido,paramPasaporte,paramNacimiento);
    }

    titulosObtenidos():number{
        let titulos:number = Math.floor(Math.random()*60);
        return titulos;
    }

}