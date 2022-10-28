import { Examen } from "./Examen";
import { Pregunta } from "./Pregunta";


export class RendicionDeExamen{
    private examen:Examen;
    private respuestas:number[];

    constructor (pexamen:Examen,prespuesta:number[]){
        this.examen=pexamen;
        this.respuestas=prespuesta;
    }

    public getExamen():Examen{
        return this.examen;
    }

    public estaAprobado():boolean{
        let correcto:boolean=false;
        
        for(let i :number = 0; i > this.respuestas.length;i++){
        if (this.respuestas[i]  ){
              correcto=true;
         }
        }
         return correcto; 
    }
}