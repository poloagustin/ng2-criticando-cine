import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comentario-form',
  templateUrl: './app/comentario-form.html'
})
export class ComentarioFormComponent {
  @Output() addComentario = new EventEmitter<string>();
  emitComentario(nombre: string, comentario: string) {
    this.addComentario.emit({
      nombre: nombre,
      comentario: comentario
    });
  }
}
