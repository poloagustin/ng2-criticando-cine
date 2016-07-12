import { Component, Output, EventEmitter } from '@angular/core';
import { Comentario } from './Comentario';

@Component({
  selector: 'comentario-form',
  templateUrl: './app/comentario-form.html'
})
export class ComentarioFormComponent {
  @Output() addComentario = new EventEmitter<Comentario>();
  emitComentario(nombre: string, comentario: string) {
    console.log('nombre:' + nombre);
    console.log('comentario:' + comentario);
    let coment = new Comentario();
    coment.setComentario(comentario);
    coment.setNombre(nombre);
    this.addComentario.emit(coment);
  }
}
