export abstract class Pregunta {
    
    private consigna: string;
    private opciones: string[];
    private opcionCorrecta:number;
    private puntaje:number;

    constructor(pconsigna:string,popciones:string[],popcionCorrecta:number,ppuntaje:number){
        this.consigna=pconsigna;
        this.opciones=popciones;
        this.opcionCorrecta=popcionCorrecta;
        this.puntaje=ppuntaje;
    }

    public addOpcion(popcion:string):void {
        this.opciones.push(popcion);
    }
    
    public setOpcionCorrecta(popcionCorrecta:number):void{
        this.opcionCorrecta=popcionCorrecta;
    }

    public esCorrecta (prespuesta:number):boolean {
        let correcto:boolean=false;
        
       if (this.opcionCorrecta===prespuesta){
             correcto=true;
        }
        return correcto; 
    }

    public getPuntaje():number{
    return this.puntaje;
    }
}