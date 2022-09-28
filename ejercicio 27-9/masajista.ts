import { Seleccion } from "./seleccion";

export class Masajista extends Seleccion{
    private certificado : string

    constructor(paramNombre:string,paramApellido:string,paramPasaporte:number,paramNacimiento:number,paramcertificado:string){
        super(paramNombre,paramApellido,paramPasaporte,paramNacimiento);
        this.certificado = paramcertificado;
    }

    getCertificado():string{
        return this.certificado;
    }

    setCertificado(pCertificado:string):void{
        this.certificado = pCertificado;
    }
    
}