import {Libro} from './libro'


export class GestorLibros{
    private listadoDeLibros : Libro []

    constructor(listadoParam:Libro[]){
        this.listadoDeLibros =listadoParam;
    }

    insertarLibro(paramLibro:Libro):void{
        this.listadoDeLibros.push(paramLibro);
    }

    consultarLibro(paramLibro:Libro):boolean{
        let respuesta: boolean = false;

        for(let i :number = 0; i < this.listadoDeLibros.length;i++){
            if(this.listadoDeLibros[i].getLibro() === paramLibro.getLibro()){
                respuesta = true;
            }
        }
        return respuesta
    }
}