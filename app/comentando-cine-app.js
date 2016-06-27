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
var comentario_form_component_1 = require('./comentario-form.component');
var comentario_label_component_1 = require('./comentario-label.component');
var ComentandoCineApp = (function () {
    function ComentandoCineApp() {
        this.comentarios = [
            {
                comentario: "Un convincente argumento en defensa de las secuelas. Andrew Stanton regresa a la animaci\u00F3n y entrega la mejor pel\u00EDcula de Pixar desde 'Up'.",
                nombre: "David Ehrlich: Indiewire",
                votos: 8
            },
            {
                comentario: "Deslumbrante secuela (...) Una bella y bulliciosa secuela plena de sentido (...) Las im\u00E1genes no dejan de deslumbrarnos con su asombroso y palpable brillo, con su incandescencia oce\u00E1nica.",
                nombre: "Owen Gleiberman: Variety",
                votos: 7
            },
            {
                comentario: "Cualquier cosa [de Pixar] que no sea una obra maestra es, b\u00E1sicamente, una decepci\u00F3n. Puede que no sea justo, pero es lo que hay. (...) 'Finding Dory' ser\u00EDa una triunfo para cualquier otro estudio de animaci\u00F3n. Pero para Pixar es... buena.",
                nombre: "Chris Nashawaty: Entertainment Weekly",
                votos: 6
            },
            {
                comentario: "Esta secuela es poco menos que un asalto a los conductos lagrimales, pero las risas y la emoci\u00F3n bien lo compensan. (...) enormemente entretenida, (...) En un a\u00F1o lleno de secuelas que nadie realmente quer\u00EDa, aqu\u00ED hay una que merece ser mencionado en la misma categor\u00EDa que su predecesora",
                nombre: "Alonso Duralde: The Wrap",
                votos: 5
            },
            {
                comentario: "Su hero\u00EDna puede que sufra de p\u00E9rdida de memoria a corto plazo, pero los espectadores con un poco de memoria se dar\u00E1n cuenta de que 'Finding Dory' se queda bastante corta comparada con su maravillosa predecesora.",
                nombre: "Todd McCarthy: The Hollywood Reporter",
                votos: 4
            },
            {
                comentario: "Mientras que la animaci\u00F3n a\u00FAn es de primera categor\u00EDa y hay un mont\u00F3n de nuevos personajes animando la historia, ['Finding Dory'] apenas tiene el mismo sentido de la emoci\u00F3n, la maravilla y el asombro que 'Finding Nemo'",
                nombre: "Brian Truitt: USA Today",
                votos: 3
            },
            {
                comentario: "Una secuela absolutamente deliciosa (...) Esta segunda parte muestra todo lo que la venerada compa\u00F1\u00EDa de animaci\u00F3n hace tan bien",
                nombre: "Tim Grierson : Screendaily",
                votos: 2
            },
            {
                comentario: "'Finding Dory' es, en su mayor parte, bastante buena. Es dulce, divertida, ocasionalmente emocionante y mejora a medida que avanza",
                nombre: "Scott Mendelson: Forbes",
                votos: 1
            }
        ];
    }
    ComentandoCineApp.prototype.addComentario = function (nombre, comentario) {
        console.log(nombre + ' ' + comentario);
        this.comentarios.push({
            comentario: comentario,
            nombre: nombre,
            votos: 0
        });
    };
    ComentandoCineApp.prototype.sortedComentarios = function () {
        return this.comentarios.sort(function (a, b) { return b.votos - a.votos; });
    };
    ComentandoCineApp.prototype.sumarVoto = function (index) {
        if (this.comentarios[index].votos < 999) {
            this.comentarios[index].votos += 1;
        }
    };
    ComentandoCineApp.prototype.restarVoto = function (index) {
        if (this.comentarios[index].votos > 0) {
            this.comentarios[index].votos -= 1;
        }
    };
    ComentandoCineApp = __decorate([
        core_1.Component({
            selector: 'comentando-cine-app',
            directives: [comentario_form_component_1.ComentarioFormComponent, comentario_label_component_1.ComentarioLabelComponent],
            templateUrl: './app/comentando-cine-app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ComentandoCineApp);
    return ComentandoCineApp;
}());
exports.ComentandoCineApp = ComentandoCineApp;
//# sourceMappingURL=comentando-cine-app.js.map