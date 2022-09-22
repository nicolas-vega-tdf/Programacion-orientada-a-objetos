class rectangulo{
    base : number ;
    altura : number;
    segundaBase: number ;
    segundaAltura:number;

    constructor(paramBase:number, paramAltura:number , paramBase2:number ,paramAltura2:number){
        this.base = paramBase;
        this.altura = paramAltura;
        this.segundaAltura = paramAltura2;
        this.segundaBase = paramBase2;
    }

    getBase():number{
        return this.base;
    }

    getAltura():number{
        return this.altura;
    }

    calcularArea():number{
        let area :number = 0;
        area = this.base * this.altura ;
        return area 
    }

    comparar():number{
        if(this.base > this.segundaBase){
            return 1
        }else if(this.base < this.segundaBase){
            return -1
        }else{
            return 0
        }
    }

    comprobacion():void{
        if(this.base === this.altura){
           console.log("es un cuadrado");
        }else{
            console.log("no es un cuadrado");
        }
    }
    
    calcularPosicion():void{
        if(this.altura > this.base){
            console.log("esta parado");
        }else{
            console.log("esta acostado");
        }
    }

}


let consultar = new rectangulo(80,150,70,50);

console.log(consultar.comparar());