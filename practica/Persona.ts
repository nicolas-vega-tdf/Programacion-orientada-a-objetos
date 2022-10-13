
export class Persona {
    protected nombre:string;
    protected apellido:string;
    protected dni:number;

    constructor(paramNombre:string,paramApellido:string,paramDni:number){
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDni;
    }

    setNombre(paramNombre:string):void{
        this.nombre = paramNombre;
    }

    setApellido(paramApellido:string):void{
        this.apellido = paramApellido;
    }

    setDni(paramDNI:number):void{
        this.dni = paramDNI;
    }

    getNombre():string{
        return this.nombre;
    }

    getApellido():string{
        return this.apellido;
    }

    getDni():number{
        return this.dni;
    } 
    
    toString():string{
        return  this.getNombre() +' '+this.getApellido() + ' DNI: '+ this.getDni(); 
    }
}