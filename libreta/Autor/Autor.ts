class Autor {
  private nombre : String;
  private apellido : String;
  private dni : Number;

  public setNombre(n : String){
    this.nombre = n;
  }

  public getNombre() : String{
    return this.nombre;
  }

  public setApellido(a : String){
    this.apellido = a;
  }

  public getApellido() : String{
    return this.apellido;
  }

  public setDni(d : Number){
    return this.dni;
  }

  public getDni(){
    return this.dni;
  }

  public getFullData() : Object {

    return {
      nombre : this.getNombre(),
      apellido : this.getApellido(),
      dni : this.getDni(),
    }
  }

}

module.exports = Autor;