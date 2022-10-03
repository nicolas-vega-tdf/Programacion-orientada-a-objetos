import {Libro} from './libro'


export class GestorLibros{
    private listadoDeLibros = new Array <Libro>;
    private nombre:string;

    constructor(paramNombre:string,listadoParam?:Array<Libro>){
        this.nombre = paramNombre
        if(listadoParam != undefined)
        this.listadoDeLibros = listadoParam;
    }

    insertarLibro(libro:Libro):void{
        this.listadoDeLibros.push(libro);
    }
    
    private obtenerIndex(paramLibro:string):number{
        let respuesta: number = -1;

        for(let i :number = 0; i < this.listadoDeLibros.length;i++){
            if(this.listadoDeLibros[i].getLibro() === paramLibro){
                respuesta = i;
            }
        }
        return respuesta
    }
    

    consultarLibro(titulo:string):boolean{
      if(this.obtenerIndex(titulo) === -1)
        return false;
      return true  
    }

    modificarLibro(posicion:number,titulo:string):void{
     this.listadoDeLibros[posicion].setLibro(titulo);
    }

    eliminar(titulo:string):void{
       if(this.obtenerIndex(titulo) === -1)
       this.listadoDeLibros.splice(this.obtenerIndex(titulo),1); 
    }
}