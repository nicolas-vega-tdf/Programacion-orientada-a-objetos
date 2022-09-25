class RegistroAutomotor{
    public listadoDeAutos:Auto[];

    constructor(listadoParametro:Auto[]){
        this.listadoDeAutos = listadoParametro
    }

    consultarSiExsiste(paramAuto:Auto):boolean{
        let respuesta: boolean = false;

        for(let i:number = 0; i < this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() == paramAuto.getPatente()){
                respuesta = true;
            }
        }
        return respuesta;
    }

    registrarVehiculo(paramAuto:Auto):void{
        this.listadoDeAutos.push(paramAuto)
    }

    eliminarVehiculo(paramAuto:Auto):void{
        for(let i:number = 0; i < this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() == paramAuto.getPatente()){
                this.listadoDeAutos.splice(i,1);
            }
        }
    }

    editarVehiculo(posicion:number,patenteParam:string,marcaParam:string):void{
        this.listadoDeAutos[posicion].setPatente(patenteParam);
        this.listadoDeAutos[posicion].setMarca(marcaParam);
    }
}

class Auto{
    private patente:string;
    private marca:string;
    private modelo: string;
    private anio: number;

    constructor(patenteParametro:string,marcaParametro:string,modeloParametro:string,anioParametro:number){
        this.patente = patenteParametro;
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro;
    }

    setAnio(paramAnio:number):void{
        this.anio = paramAnio;
    }
    getAnio():number{
        return this.anio;
    }

    setModelo(paramModelo:string):void{
        this.modelo = paramModelo;
    }
    getModelo():string{
        return this.modelo;
    }

    setMarca(paramMarca:string):void{
        this.marca = paramMarca;
    }
    getMarca():string{
        return this.marca;
    }

    setPatente(paramPatente:string):void{
        this.patente = paramPatente;
    }
    getPatente():string{
        return this.patente;
    }
}

let auto1:Auto = new Auto("AAA123","bmw","m5",2020);
let auto2:Auto = new Auto("ABC223","nisan","r35",1980);
let auto3:Auto = new Auto("CDE423","ferrari","pista",2022);

let arregloDeAutos:Auto[] = [auto1,auto2,auto3];

let registroTDF:RegistroAutomotor = new RegistroAutomotor(arregloDeAutos);

let auto4:Auto = new Auto("DDD567","fiat","palio",2014);

//No lo encuentra porque no esta registrado 
let respuestaRecibida :boolean = registroTDF.consultarSiExsiste(auto4);
console.log(respuestaRecibida);

// Lo registro
registroTDF.registrarVehiculo(auto4);

//Lo vuelvo a buscar
let respuestaRecibida2 :boolean = registroTDF.consultarSiExsiste(auto4);
console.log(respuestaRecibida2);

//Edito datos del auto
registroTDF.editarVehiculo(3,"CCC234","corsa");
console.log(auto4);

//Lo elimino del registro 
registroTDF.eliminarVehiculo(auto4);