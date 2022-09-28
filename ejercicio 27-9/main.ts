import { Masajista } from "./masajista";
import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";



let messi = new Futbolista("Leonel","Messi",12444370,10-5-1999);
let enzo:Masajista = new Masajista("Enzo","bustos",33123478,12-6-1870,"quinesiologo");
let bautista:Entrenador = new Entrenador("Bautista","lopez",33012333,3-23-4545);

console.log(messi.goles());
console.log(enzo.getCertificado());
console.log(bautista.titulosObtenidos());