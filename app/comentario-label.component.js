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
var ComentarioLabelComponent = (function () {
    function ComentarioLabelComponent() {
        this.sumarVoto = new core_1.EventEmitter();
        this.restarVoto = new core_1.EventEmitter();
    }
    ComentarioLabelComponent.prototype.emitSumarVoto = function (index) {
        this.sumarVoto.emit(index);
    };
    ComentarioLabelComponent.prototype.emitRestarVoto = function (index) {
        this.restarVoto.emit(index);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComentarioLabelComponent.prototype, "inputComentario", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComentarioLabelComponent.prototype, "inputNombre", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComentarioLabelComponent.prototype, "inputVotos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ComentarioLabelComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ComentarioLabelComponent.prototype, "sumarVoto", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ComentarioLabelComponent.prototype, "restarVoto", void 0);
    ComentarioLabelComponent = __decorate([
        core_1.Component({
            selector: 'comentario-label',
            templateUrl: './app/comentario-label.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ComentarioLabelComponent);
    return ComentarioLabelComponent;
}());
exports.ComentarioLabelComponent = ComentarioLabelComponent;
//# sourceMappingURL=comentario-label.component.js.map