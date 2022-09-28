import { Masajista } from "./masajista";
import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";

let fecha = new Date("10-02-1990")

let messi = new Futbolista("Leonel","Messi",12444370,fecha);
let enzo:Masajista = new Masajista("Enzo","bustos",33123478,fecha,"quinesiologo");
let bautista:Entrenador = new Entrenador("Bautista","lopez",33012333,fecha);

console.log(messi.goles());
console.log(enzo.getCertificado());
console.log(bautista.titulosObtenidos());