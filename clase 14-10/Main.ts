import { Animal } from "./Animal";
import { ListaDeAnimales } from "./ListaDeAnimales";
import { Gato } from "./Gato";
import { Pez } from "./Pez";
import { Araña } from "./Araña";

let animal1:Gato = new Gato("kitty",4);
let animal2:Pez = new Pez("Fish",0);
let animal3:Araña = new Araña(8);
let animal4:Gato = new Gato("y",4);

let arrayAnimales:Animal[] = [animal1,animal2,animal3];
let listado:ListaDeAnimales = new ListaDeAnimales(arrayAnimales);


console.log(listado.buscar(animal4));
listado.agregarAnimal(animal4);
console.log(listado);
listado.removerAnimal(animal1);
console.log(listado);