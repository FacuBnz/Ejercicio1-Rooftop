class Nota {
  private titulo : String;
  private contenido : String;
  private fecha : String;
  
  public setTitulo(t : String){
    this.titulo = t;
  }

  public getTitulo () : String{
    return this.titulo;
  }

  public setContenido (c : String) {
    this.contenido = c;
  }

  public getContenido () : String{
    return this.contenido;
  }

  public setFecha (f : String) {
    this.fecha = f;
  }

  public getFecha () : String {
    return this.fecha;
  }

  public getFullData() : Object {

    return {
      titulo : this.getTitulo(),
      contenido : this.getContenido(),
      fecha : this.getFecha(),
    }
  }
}

module.exports = Nota