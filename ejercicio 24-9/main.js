"use strict";
exports.__esModule = true;
var gestor_1 = require("./gestor");
var libro_1 = require("./libro");
var biblioteca = new gestor_1.GestorLibros("biblioteca");
var libro1 = new libro_1.Libro("Harry potter", "J.K Rowling", "Fantasia");
var libro2 = new libro_1.Libro("Stranger things", "Camilla lackberg", "Ficcion");
var libro3 = new libro_1.Libro("Diario de Ana franck", "Ana Frank", "Autobiografia");
var libro4 = new libro_1.Libro("la biblioteca de badel", "Jorge luis borge", "Ficcion").toString();
biblioteca.insertarLibro(libro1);
biblioteca.insertarLibro(libro2);
biblioteca.insertarLibro(libro3);
biblioteca.insertarLibro(libro4);
biblioteca.modificarLibro(3, "la biblioteca de babel");
if (biblioteca.consultarLibro("la biblioteca de babel") === true) {
    console.log("Su libro si se encuentra en esta biblioteca");
}
else {
    console.log("Su libro no se encuentra");
}
biblioteca.eliminar("la biblioteca de badel");
var consulta = biblioteca.consultarLibro("la biblioteca de babel");
console.log(consulta);
