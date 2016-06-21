import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comentario-form',
  templateUrl: './app/comentario-form.html'
})
export class ComentarioFormComponent {
  @Output() inputNombre = new EventEmitter<string>();
  @Output() inputComentario = new EventEmitter<string>();
  emitComentario(nombre: string, comentario: string) {
    this.inputNombre.emit(nombre);
    this.inputComentario.emit(comentario);
  }
}
