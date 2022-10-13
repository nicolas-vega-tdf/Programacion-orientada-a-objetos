import { Persona } from "./Persona";


export abstract class Cuenta  {
    protected numeroCuenta:number;
    protected saldo:number;
    protected cliente:Persona;
    
    constructor(paramNumeroCuenta:number,paramCliente:Persona) {
        this.saldo = 0;
        this.numeroCuenta = paramNumeroCuenta;
        this.cliente = paramCliente;
    }

    setNumeroCuenta(paramNumero:number):void{
        this.numeroCuenta = paramNumero;
    }

    setSaldo(paramSaldo:number):void{
        this.saldo = paramSaldo;
    }

    setCliente(paramCliente:Persona):void{
        this.cliente = paramCliente;
    }

    getNumeroCuenta():number{
        return this.numeroCuenta;
    }

    getSaldo():number{
        return this.saldo
    }

    getCliente():Persona{
        return this.cliente
    }

    ingresar(plata:number):void{
        this.saldo = this.saldo + plata;
    }

    abstract retirar(paramRetiro:number):void;
    abstract actualizarSaldo():void;
}



class CuentaAhorro extends Cuenta {
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
      if(this.saldoMinimo > paramRetiro)
        this.saldo - paramRetiro
        console.log("Usted retiro: " + paramRetiro);               
    }

    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interesVariable;
    }

    toString():string{
        return 'Cliente: ' + this.cliente +'\n' + 'Numero de cuenta: '+ this.numeroCuenta +'\n' +"Con un saldo minimo de: "+ this.saldoMinimo +'\n' +'Contiene un saldo de: '+'$'+ this.saldo +' y contiene un interes variable.';
    }
}