let libreta = require('./libreta/Libreta');

let libre = new libreta();

let titulo = "frases de macri"
let contenido = "pasaron cosas, pusimos metas optimistas, hace 4 años que no crecemos"
let fecha = "21/05/2021"
let nombre = "Mauricio"
let apellido = "Macri"
let dni = 12345678


libre.newNota(titulo, contenido, fecha, nombre, apellido, dni);

titulo = "frases simpson"
contenido = "Ay caramba, a la grande le puse cuca, plan dental lisa necesita fresos"
fecha = "20/05/2021"
nombre = "Facu"
apellido = "Benitez"
dni = 45679812

libre.newNota(titulo, contenido, fecha, nombre, apellido, dni);

titulo = "patrones de diseño"
contenido = "Singleton, factory, builder, MVC"
fecha = "23/05/2019"
nombre = "Facu"
apellido = "Benitez"
dni = 45678912

libre.newNota(titulo, contenido, fecha, nombre, apellido, dni);

titulo = "lenguajes de programacion"
contenido = "C++, PHP, JavaScript, Java, C#, C"
fecha = "25/11/20"
nombre = "Nico"
apellido = "Gutierrez"
dni = 45678932

libre.newNota(titulo, contenido, fecha, nombre, apellido, dni);


let lista = libre.getAllLista();
let notasFacu = libre.getNotasForAutor('Facu');


console.log(lista);
console.log(notasFacu);