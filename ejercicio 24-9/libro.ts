export class Libro{
    private libro: string;
    private autor:string;
    private genero:string;

    constructor(paramLibro:string,paramAutor:string,paramGenero?:string){
        this.libro = paramLibro;
        this.autor = paramAutor;
        if(paramGenero != undefined)
        this.genero = paramGenero;
    }

    getGenero():string{
        return this.genero;
    }
    
    getAutor():string{
        return this.autor;
    }

    getLibro():string{
        return this.libro;
    }

    setLibro(pLibro:string):void{
        this.libro = pLibro;
    }

    toString():string{
        return "Libro: " +this.libro +"\n "+"Autor: " +this.autor +"\n"+"Genero: " +this.genero;
    }
}