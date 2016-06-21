import { Component, Input, Output } from '@angular/core';

interface Comentario {
  comentario: string;
  nombre: string;
  votos: number;
}

@Component({
  selector: 'comentario-label',
  templateUrl: './app/comentario-label.html'
})
export class ComentarioLabelComponent {
  @Input() comentarios: Comentario[];
}
