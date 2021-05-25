"use strict";
exports.__esModule = true;
var Nota = /** @class */ (function () {
    function Nota(aut) {
        this.autor = aut;
    }
    Nota.prototype.getAutor = function () {
        return this.autor;
    };
    Nota.prototype.setContenido = function (c) {
        this.contenido = c;
    };
    Nota.prototype.getContenido = function () {
        return this.contenido;
    };
    Nota.prototype.setId = function (f) {
        this.id = f;
    };
    Nota.prototype.getId = function () {
        return this.id;
    };
    return Nota;
}());
exports["default"] = Nota;
