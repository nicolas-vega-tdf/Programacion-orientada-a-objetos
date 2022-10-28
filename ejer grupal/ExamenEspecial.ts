import { Examen } from "./Examen";
import { Pregunta } from "./Pregunta";
export class ExamenEspecial extends Examen {
  private penalizacionRespuestaIncorrecta:number;
  private pregunta:Pregunta[];

  constructor(pconsigna: string, popciones: string[], popcionCorrecta: number, ppuntaje: number, tema: string, puntajeAprob: number, penalizacion:number){
    super(pconsigna, popciones, popcionCorrecta, ppuntaje, tema, puntajeAprob);
    this.penalizacionRespuestaIncorrecta=penalizacion;
    }

    public addPregunta(ppregunta: Pregunta): void {
        this.pregunta.push(ppregunta);           
    }

    getPenalizacionRespuestaIncorrecta():number{
        return this.penalizacionRespuestaIncorrecta;
    }
    
}