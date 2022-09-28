export class Libro{
    private libro: string;

    constructor(paramLibro:string){
        this.libro = paramLibro;
    }

    getLibro():string{
        return this.libro
    }

    setLibro(pLibro:string):void{
        this.libro = pLibro;
    }
}