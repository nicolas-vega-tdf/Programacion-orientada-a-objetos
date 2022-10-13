import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";


export class CuentaAhorro extends Cuenta {
    private interesVariable:number;
    private saldoMinimo:number;

    constructor(paramNumeroCuenta:number,paramCliente:Persona){
       super(paramNumeroCuenta,paramCliente) 
    }

    setSaldominimo(paramSaldo:number):void{
        this.saldoMinimo = paramSaldo
    }

    getSaldoMinimo():number{
        return this.saldoMinimo;
    }

    setInteres(paramInteres:number){
        this.interesVariable = paramInteres;
    }

    retirar(paramRetiro:number): void {
      let aux = this.saldo - this.saldoMinimo;
        if(aux > paramRetiro)
        this.saldo = this.saldo - paramRetiro;
        console.log("Usted retiro: " + paramRetiro);               
    }

    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interesVariable;
    }

    toString():string{
        return 'Cliente: ' + this.cliente +'\n' + 'Numero de cuenta: '+ this.numeroCuenta +'\n' +"Con un saldo minimo de: "+ this.saldoMinimo +'\n' +'Contiene un saldo de: '+'$'+ this.saldo +' y contiene un interes variable.';
    }
}