import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";


export class CuentaCorriente extends Cuenta{

    constructor(paramNumeroCuenta:number,paramCliente:Persona){
        super(paramNumeroCuenta,paramCliente)
    }

    retirar(paramRetiro:number): void {
        if(this.saldo > paramRetiro){
            this.saldo - paramRetiro
            console.log("retiraste: "+ paramRetiro);
        } else {
            console.log("Saldo insuficiente");
        }
    }

    actualizarSaldo(): void {
        this.saldo = this.saldo * 1.5;
    }

    toString():string{
    return  'Cliente: ' + this.cliente.toString() +'\n' + 'Numero de cuenta: '+ this.numeroCuenta +'\n'+'Contiene un saldo de: '+'$'+ this.saldo +' con un interes de: 1.5%';
    }

}