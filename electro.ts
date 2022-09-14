class electrodomestico{
    nombre : string;
    precioBase : number;
    color : string;
    consumoEnergetico: number;
    peso : number;

    constructor(paramNombre :string, paramPrecio :number, paramColor:string, paramConsumo:number, paramPeso:number){
        this.nombre = paramNombre ;
        this.precioBase = paramPrecio;
        this.color = paramColor;
        this.consumoEnergetico = paramConsumo;
        this.peso = paramPeso;
    }

    getNombre():string{
        return this.nombre;
    }

    getPrecio():number{
        return this.precioBase;
    }

    setcolor(pcolor:string):void{
       this.color=pcolor;
    }
    
    getPeso():number{
        return this.peso;
    }

    consumo():boolean{
       let consumoE : boolean;
        if(this.consumoEnergetico> 1000){
            consumoE = false
        } else {
           consumoE = true 
        }
        return consumoE
    }

    verBalance():number{
       let balance : number ;
       balance = this.peso % this.precioBase;
       return balance;
    }

    gama(){

    }

}