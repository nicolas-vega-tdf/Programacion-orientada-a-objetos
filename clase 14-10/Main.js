"use strict";
exports.__esModule = true;
var ListaDeAnimales_1 = require("./ListaDeAnimales");
var Gato_1 = require("./Gato");
var Pez_1 = require("./Pez");
var Ara_a_1 = require("./Ara\u00F1a");
var animal1 = new Gato_1.Gato("kitty", 4);
var animal2 = new Pez_1.Pez("Fish", 0);
var animal3 = new Ara_a_1.Araña(8);
var animal4 = new Gato_1.Gato("y", 4);
var arrayAnimales = [animal1, animal2, animal3];
var listado = new ListaDeAnimales_1.ListaDeAnimales(arrayAnimales);
console.log(listado.buscar(animal4));
listado.agregarAnimal(animal4);
console.log(listado);
listado.removerAnimal(animal1);
console.log(listado);
