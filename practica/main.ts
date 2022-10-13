import { Persona } from "./Persona";
import { CuentaCorriente  } from "./CuentaCorriente";
import { CuentaAhorro } from "./CuentaAhorro";

let pepe = new Persona("Pepe","Ramires",44781250);
let ccPepe = new CuentaCorriente(777652,pepe);
let cahorPepe = new CuentaAhorro(5239107,pepe);

ccPepe.ingresar(500000);
ccPepe.actualizarSaldo();
console.log(ccPepe.toString());

console.log("//////////////////////////////////");

cahorPepe.ingresar(1000000);
cahorPepe.setInteres(2);
cahorPepe.actualizarSaldo();
cahorPepe.setSaldominimo(10000);
let saldo:number = cahorPepe.getSaldo();
console.log(cahorPepe.toString());
