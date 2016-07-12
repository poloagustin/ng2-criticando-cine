import { Component } from '@angular/core';
import { ComentarioFormComponent } from './comentario-form.component';
import { ComentarioLabelComponent } from './comentario-label.component';
import { Comentario } from './Comentario';

@Component({
  selector: 'comentando-cine-app',
  directives: [ComentarioFormComponent, ComentarioLabelComponent],
  templateUrl: './app/comentando-cine-app.html'
})
export class ComentandoCineApp {
  comentarios = new Array<Comentario>();

  constructor() {
    this.comentarios.push(new Comentario(`Un convincente argumento en defensa de las secuelas. Andrew Stanton regresa a la animación y entrega la mejor película de Pixar desde 'Up'.`, `David Ehrlich: Indiewire`, 8));
    this.comentarios.push(new Comentario(`Deslumbrante secuela (...) Una bella y bulliciosa secuela plena de sentido (...) Las imágenes no dejan de deslumbrarnos con su asombroso y palpable brillo, con su incandescencia oceánica.`, `Owen Gleiberman: Variety`, 7));
    this.comentarios.push(new Comentario(`Cualquier cosa [de Pixar] que no sea una obra maestra es, básicamente, una decepción. Puede que no sea justo, pero es lo que hay. (...) 'Finding Dory' sería una triunfo para cualquier otro estudio de animación. Pero para Pixar es... buena.`, `Chris Nashawaty: Entertainment Weekly`, 6));
    this.comentarios.push(new Comentario(`Esta secuela es poco menos que un asalto a los conductos lagrimales, pero las risas y la emoción bien lo compensan. (...) enormemente entretenida, (...) En un año lleno de secuelas que nadie realmente quería, aquí hay una que merece ser mencionado en la misma categoría que su predecesora`, `Alonso Duralde: The Wrap`, 5));
    this.comentarios.push(new Comentario(`Su heroína puede que sufra de pérdida de memoria a corto plazo, pero los espectadores con un poco de memoria se darán cuenta de que 'Finding Dory' se queda bastante corta comparada con su maravillosa predecesora.`, `Todd McCarthy: The Hollywood Reporter`, 4));
    this.comentarios.push(new Comentario(`Mientras que la animación aún es de primera categoría y hay un montón de nuevos personajes animando la historia, ['Finding Dory'] apenas tiene el mismo sentido de la emoción, la maravilla y el asombro que 'Finding Nemo'`, `Brian Truitt: USA Today`, 3));
    this.comentarios.push(new Comentario(`Una secuela absolutamente deliciosa (...) Esta segunda parte muestra todo lo que la venerada compañía de animación hace tan bien`, `Tim Grierson : Screendaily`, 2));
    this.comentarios.push(new Comentario(`'Finding Dory' es, en su mayor parte, bastante buena. Es dulce, divertida, ocasionalmente emocionante y mejora a medida que avanza`, `Scott Mendelson: Forbes`, 1));
  }

  addComentario(comentario: Comentario): void {
    this.comentarios.push(comentario);
  }

  sortedComentarios(): Comentario[] {
    return this.comentarios.sort((a: Comentario, b: Comentario) => b.votos - a.votos);
  }

  sumarVoto(index: number) {
    if (this.comentarios[index].getVotos() < 999) {
      this.comentarios[index].setVotos(this.comentarios[index].getVotos() + 1);
    }
  }

  restarVoto(index: number) {
    if (this.comentarios[index].getVotos() > 0) {
      this.comentarios[index].setVotos(this.comentarios[index].getVotos() - 1);
    }
  }
}
