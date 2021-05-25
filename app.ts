import Autor from "./libreta/Autor/Autor";
import Nota from "./libreta/Nota/Nota";
import Libreta from "./libreta/Libreta";

let autor1 = new Autor();

autor1.setNombre("Facu");
autor1.setApellido("Benitez");
autor1.setDni(12345678);

let nota1 = new Nota(autor1);

nota1.setId(1);
nota1.setContenido("pasaron cosas, pusimos metas optimistas, hace 4 años que no crecemos");

let autor2 = new Autor();

autor2.setNombre("Abi");
autor2.setApellido("Gomez");
autor2.setDni(78945612);

let nota2 = new Nota(autor2);

nota2.setId(2);
nota2.setContenido("Ay caramba, a la grande le puse cuca, plan dental lisa necesita fresos");

let autor3 = new Autor();

autor3.setNombre("Mauricio");
autor3.setApellido("Macri");
autor3.setDni(45612378);

let nota3 = new Nota(autor3);

nota3.setId(3);
nota3.setContenido("pasaron cosas, pusimos metas optimistas, hace 4 años que no crecemos");

console.log(nota1);
console.log(nota2);
console.log(nota3);

let listado = new Libreta();

listado.addNota(nota1);
listado.addNota(nota2);
listado.addNota(nota3);

console.log(listado.getAllLista());
console.log(listado.getNotasForDni(45612378));
