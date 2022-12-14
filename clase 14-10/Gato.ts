import { Animal } from "./Animal";
import { Mascota } from "./Mascota";

export class Gato extends Animal implements Mascota {
    protected nombre : string;
    
    constructor(paramNombre:string,paramPatas:number){
        super(paramPatas);
        this.nombre = paramNombre;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public jugar(nombre: string): void {
        console.log(nombre + " esta jugando");
    }
    
    public comer(): void {
        console.log("Esta comiendo");
    }
    public caminar(patas: number): void {
       console.log("Esta caminando en "+ patas + "patas");
    }
}