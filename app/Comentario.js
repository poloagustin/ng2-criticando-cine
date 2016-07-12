"use strict";
var Comentario = (function () {
    function Comentario(comentario, nombre, votos) {
        this.comentario = comentario || '';
        this.nombre = nombre || '';
        this.votos = votos || 0;
    }
    Comentario.prototype.getComentario = function () {
        return this.comentario;
    };
    Comentario.prototype.setComentario = function (comentario) {
        this.comentario = comentario;
    };
    Comentario.prototype.getNombre = function () {
        return this.nombre;
    };
    Comentario.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Comentario.prototype.getVotos = function () {
        return this.votos;
    };
    Comentario.prototype.setVotos = function (votos) {
        this.votos = votos;
    };
    return Comentario;
}());
exports.Comentario = Comentario;
//# sourceMappingURL=Comentario.js.map