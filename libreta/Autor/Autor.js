var Autor = /** @class */ (function () {
    function Autor() {
    }
    Autor.prototype.setNombre = function (n) {
        this.nombre = n;
    };
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.setApellido = function (a) {
        this.apellido = a;
    };
    Autor.prototype.getApellido = function () {
        return this.apellido;
    };
    Autor.prototype.setDni = function (d) {
        this.dni = d;
    };
    Autor.prototype.getDni = function () {
        return this.dni;
    };
    Autor.prototype.getFullData = function () {
        return {
            nombre: this.getNombre(),
            apellido: this.getApellido(),
            dni: this.getDni()
        };
    };
    return Autor;
}());
module.exports = Autor;
