class rectangulo{
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

    setArea():number{
        let area :number = 0;
        area = this.base * this.altura ;
        return area 
    }

    comparacion(rectanculo:number):number{
        if(rectanculo > this.base){
            return 1
        }else if(rectanculo < this.base){
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
    
    acostado():void{
        if(this.altura > this.base){
            console.log("esta parado");
        }else{
            console.log("esta acostado");
        }
    }

}


let consultar = new rectangulo(50,150);

consultar.getAltura()
consultar.getBase()
consultar.setArea()
consultar.comparacion(50)
consultar.comprobacion()
consultar.acostado()