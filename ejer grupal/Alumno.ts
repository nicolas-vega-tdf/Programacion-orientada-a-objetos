import { RendicionDeExamen } from "./RendicionDeExamen";
import { Examen } from "./Examen";

export class Alumno {
    private examenesRendidos:RendicionDeExamen[];
    private nombre:string;
    private dni:number;

    constructor(paramNombre:string,paramDni:number){
        this.nombre = paramNombre;
        this.dni = paramDni;
    }

    getNombre():string{
        return this.nombre;
    }

    getDni():number{
        return this.dni;
    }

    rendirExamen(examen: Examen , respuestas:number[]):boolean{

        for(let i:number = 0; i > respuestas.length;i++){
            respuestas[i] 
        }
        return false
    }
}