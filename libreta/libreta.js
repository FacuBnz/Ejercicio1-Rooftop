"use strict";
exports.__esModule = true;
var Libreta = /** @class */ (function () {
    function Libreta() {
        this.lista = [];
    }
    Libreta.prototype.addNota = function (nota) {
        this.lista.push(nota);
    };
    Libreta.prototype.getAllLista = function () {
        return this.lista;
    };
    Libreta.prototype.getNotasForDni = function (dni) {
        return this.lista.filter(function (nota) { return nota.getAutor().getDni() == dni; });
    };
    return Libreta;
}());
exports["default"] = Libreta;
