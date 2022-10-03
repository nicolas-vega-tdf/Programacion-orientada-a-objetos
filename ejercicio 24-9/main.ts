import { GestorLibros } from "./gestor";
import { Libro } from "./libro";


let biblioteca = new GestorLibros("biblioteca");

let libro1 = new Libro("Harry potter","J.K Rowling","Fantasia");
let libro2 = new Libro("Stranger things","Camilla lackberg","Ficcion");
let libro3 = new Libro("Diario de Ana franck","Ana Frank","Autobiografia");
let libro4 = new Libro("la biblioteca de badel","Jorge luis borge","Ficcion");

biblioteca.insertarLibro(libro1);
biblioteca.insertarLibro(libro2);
biblioteca.insertarLibro(libro3);
biblioteca.insertarLibro(libro4);

biblioteca.modificarLibro(3,"la biblioteca de babel");

if (biblioteca.consultarLibro("la biblioteca de babel") === true){
    console.log("Su libro si se encuentra en esta biblioteca");
}else{
    console.log("Su libro no se encuentra");
}

biblioteca.eliminar("la biblioteca de badel");

let consulta :boolean = biblioteca.consultarLibro("la biblioteca de babel");
console.log(consulta);

