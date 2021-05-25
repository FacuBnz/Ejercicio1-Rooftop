import Nota from "../libreta/Nota/Nota";


class Libreta {
  private lista : Array<Nota> = [];

  public addNota(nota : Nota){
      this.lista.push(nota);
  }

  public getAllLista() {
    return this.lista
  }

  public getNotasForDni(dni : Number) : Array<Nota> {
    return this.lista.filter(nota => nota.getAutor().getDni() == dni);
  }
}

export default Libreta