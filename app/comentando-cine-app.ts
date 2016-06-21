import { Component } from '@angular/core';
import { ComentarioFormComponent } from './comentario-form.component';
import { ComentarioLabelComponent } from './comentario-label.component';

interface Comentario {
  comentario: string;
  nombre: string;
  votos: number;
}

@Component({
  selector: 'comentando-cine-app',
  directives: [ComentarioFormComponent, ComentarioLabelComponent],
  templateUrl: './app/comentando-cine-app.html'
})
export class ComentandoCineApp {
  comentarios: Comentario[];

  constructor() {
    this.comentarios = [
      {
        comentario: `Un convincente argumento en defensa de las secuelas. Andrew Stanton regresa a la animación y entrega la mejor película de Pixar desde 'Up'.`,
        nombre: `David Ehrlich: Indiewire`,
        votos: 8
      },
      {
        comentario: `Deslumbrante secuela (...) Una bella y bulliciosa secuela plena de sentido (...) Las imágenes no dejan de deslumbrarnos con su asombroso y palpable brillo, con su incandescencia oceánica.`,
        nombre: `Owen Gleiberman: Variety`,
        votos: 7
      },
      {
        comentario: `Cualquier cosa [de Pixar] que no sea una obra maestra es, básicamente, una decepción. Puede que no sea justo, pero es lo que hay. (...) 'Finding Dory' sería una triunfo para cualquier otro estudio de animación. Pero para Pixar es... buena.`,
        nombre: `Chris Nashawaty: Entertainment Weekly`,
        votos: 6
      },
      {
        comentario: `Esta secuela es poco menos que un asalto a los conductos lagrimales, pero las risas y la emoción bien lo compensan. (...) enormemente entretenida, (...) En un año lleno de secuelas que nadie realmente quería, aquí hay una que merece ser mencionado en la misma categoría que su predecesora`,
        nombre: `Alonso Duralde: The Wrap`,
        votos: 5
      },
      {
        comentario: `Su heroína puede que sufra de pérdida de memoria a corto plazo, pero los espectadores con un poco de memoria se darán cuenta de que 'Finding Dory' se queda bastante corta comparada con su maravillosa predecesora.`,
        nombre: `Todd McCarthy: The Hollywood Reporter`,
        votos: 4
      },
      {
        comentario: `Mientras que la animación aún es de primera categoría y hay un montón de nuevos personajes animando la historia, ['Finding Dory'] apenas tiene el mismo sentido de la emoción, la maravilla y el asombro que 'Finding Nemo'`,
        nombre: `Brian Truitt: USA Today`,
        votos: 3
      },
      {
        comentario: `Una secuela absolutamente deliciosa (...) Esta segunda parte muestra todo lo que la venerada compañía de animación hace tan bien`,
        nombre: `Tim Grierson : Screendaily`,
        votos: 2
      },
      {
        comentario: `'Finding Dory' es, en su mayor parte, bastante buena. Es dulce, divertida, ocasionalmente emocionante y mejora a medida que avanza`,
        nombre: `Scott Mendelson: Forbes`,
        votos: 1
      }
    ]
  }

  addComentario(nombre: string, comentario: string): void {
    console.log(nombre + ' ' + comentario);
    this.comentarios.push({
      comentario: comentario,
      nombre: nombre,
      votos: 0
    });
  }

  sortedComentarios(): Comentario[] {
    return this.comentarios.sort((a: Comentario, b: Comentario) => b.votos - a.votos);
  }
}
