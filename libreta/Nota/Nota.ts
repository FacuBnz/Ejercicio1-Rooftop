import Autor from "../Autor/Autor";

class Nota {
  private autor : Autor;
  private contenido : String;
  private id : Number;

  constructor(aut : Autor) {
    this.autor = aut;
  }

  public getAutor(){
    return this.autor;
  }
  
  public setContenido (c : String) {
    this.contenido = c;
  }

  public getContenido () : String{
    return this.contenido;
  }

  public setId (f : Number) {
    this.id = f;
  }

  public getId () : Number {
    return this.id;
  }
}

export default Nota;