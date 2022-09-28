export class Seleccion{
    protected nombre: string;
    protected apellido: string;
    protected pasaporte: number;
    protected nacimiento: number;

    constructor(paramNombre:string,paramApellido:string,paramPasaporte:number,paramNacimiento:number){
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.pasaporte = paramPasaporte;
        this.nacimiento = paramNacimiento;
    }

    getNombre():string{
        return this.nombre;
    }

    setNombre(paraNombre:string):void{
        this.nombre = paraNombre;
    }

    getApellido():string{
        return this.apellido;
    }

    setApellido(paraApellido:string):void{
        this.apellido = paraApellido;
    }
    
    getPasaporte():number{
        return this.pasaporte;
    }

    setPasaporte(paraPasaporte:number):void{
        this.pasaporte = paraPasaporte;
    }

    getNacimiento():number{
        return this.nacimiento;
    }

    setNacimiento(paraNacimiento:number):void{
        this.nacimiento = paraNacimiento;
    }

}

