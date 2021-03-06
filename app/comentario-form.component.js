"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Comentario_1 = require('./Comentario');
var ComentarioFormComponent = (function () {
    function ComentarioFormComponent() {
        this.addComentario = new core_1.EventEmitter();
    }
    ComentarioFormComponent.prototype.emitComentario = function (nombre, comentario) {
        console.log('nombre:' + nombre);
        console.log('comentario:' + comentario);
        var coment = new Comentario_1.Comentario();
        coment.setComentario(comentario);
        coment.setNombre(nombre);
        this.addComentario.emit(coment);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ComentarioFormComponent.prototype, "addComentario", void 0);
    ComentarioFormComponent = __decorate([
        core_1.Component({
            selector: 'comentario-form',
            templateUrl: './app/comentario-form.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ComentarioFormComponent);
    return ComentarioFormComponent;
}());
exports.ComentarioFormComponent = ComentarioFormComponent;
//# sourceMappingURL=comentario-form.component.js.map