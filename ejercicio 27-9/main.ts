import { GestorLibros } from "./gestor";
import { Libro } from "./libro";

let libro1 = new Libro("harry poter");
let libro2 = new Libro("stranger things");

let arregloDeLibros:Libro[] =[libro1,libro2];

let gestorDeTdf:GestorLibros = new GestorLibros(arregloDeLibros);

let libro3 = new Libro("Ana franck");

let respuesta : boolean = gestorDeTdf.consultarLibro(libro3);
console.log(respuesta);

gestorDeTdf.insertarLibro(libro3);

let respuesta2 : boolean = gestorDeTdf.consultarLibro(libro3);
console.log(respuesta2);