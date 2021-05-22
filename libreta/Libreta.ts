let nota = require('./Nota/Nota');
let autor = require('./Autor/Autor');

class Libreta {
  private static lista;

  constructor(){
    Libreta.lista = new Set();
  }

  public newNota(titulo : String, contenido : String, fecha : String, nombre : String, apellido : String, dni : Number){

    let n = new nota();
    let a = new autor();

    try {
      a.setNombre(nombre);
      a.setApellido(apellido);
      a.setDni(dni);

      n.setTitulo(titulo);
      n.setContenido(contenido);
      n.setFecha(fecha);

      Libreta.lista.add({
        autor : a.getFullData(),
        nota : n.getFullData(),
      });

    } catch (e) {
      console.log(e.message);
    }
  }

  public getAllLista() {
    return Libreta.lista
  }

  public getNotasForAutor(nom : String) : Array<String> {

    try {
      const arr = Array.from(Libreta.lista);
    
      let res = []

      for (let i of arr) {
        if(i['autor']['nombre'] == nom ) res.push(i['nota'])
      }
      return res;

    } catch (e) {
      console.log(e.message);
    }
  }
}

module.exports = Libreta