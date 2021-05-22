var Nota = /** @class */ (function () {
    function Nota() {
    }
    Nota.prototype.setTitulo = function (t) {
        this.titulo = t;
    };
    Nota.prototype.getTitulo = function () {
        return this.titulo;
    };
    Nota.prototype.setContenido = function (c) {
        this.contenido = c;
    };
    Nota.prototype.getContenido = function () {
        return this.contenido;
    };
    Nota.prototype.setFecha = function (f) {
        this.fecha = f;
    };
    Nota.prototype.getFecha = function () {
        return this.fecha;
    };
    Nota.prototype.getFullData = function () {
        return {
            titulo: this.getTitulo(),
            contenido: this.getContenido(),
            fecha: this.getFecha()
        };
    };
    return Nota;
}());
module.exports = Nota;
