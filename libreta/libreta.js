var nota = require('./Nota/Nota');
var autor = require('./Autor/Autor');
var Libreta = /** @class */ (function () {
    function Libreta() {
        Libreta.lista = new Set();
    }
    Libreta.prototype.newNota = function (titulo, contenido, fecha, nombre, apellido, dni) {
        var n = new nota();
        var a = new autor();
        try {
            a.setNombre(nombre);
            a.setApellido(apellido);
            a.setDni(dni);
            n.setTitulo(titulo);
            n.setContenido(contenido);
            n.setFecha(fecha);
            Libreta.lista.add({
                autor: a.getFullData(),
                nota: n.getFullData()
            });
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Libreta.prototype.getAllLista = function () {
        return Libreta.lista;
    };
    Libreta.prototype.getNotasForAutor = function (nom) {
        try {
            var arr = Array.from(Libreta.lista);
            var res = [];
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var i = arr_1[_i];
                if (i['autor']['nombre'] == nom)
                    res.push(i['nota']);
            }
            return res;
        }
        catch (e) {
            console.log(e.message);
        }
    };
    return Libreta;
}());
module.exports = Libreta;
