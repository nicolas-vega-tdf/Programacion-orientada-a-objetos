class Rectangulo{
    base : number ;
    altura : number;

    constructor(paramBase:number, paramAltura:number){
        this.base = paramBase;
        this.altura = paramAltura;
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

class Comparar{
    rectangulos:Rectangulo[]

    constructor(param:Rectangulo[]){
        this.rectangulos = param;
    }


    comparar(arreglo:Rectangulo):number{
        let respuesta: number = 0;

        for(let i:number = 0; i < this.rectangulos.length;i++){
            if(this.rectangulos[i].getBase() > arreglo.getBase()){
                respuesta = 1 ;
            }else (this.rectangulos[i].getBase() < arreglo.getBase()){
                respuesta = 2 ;
            }
        }
        return respuesta 
    }

}

let rectangulo1 = new Rectangulo(80,150);
let rectangulo2 = new Rectangulo(20,70);

let arregloDeRectangulos:Rectangulo[] = [rectangulo1,rectangulo2]

let comparar1:Comparar = new Comparar(arregloDeRectangulos);

console.log(comparar1);