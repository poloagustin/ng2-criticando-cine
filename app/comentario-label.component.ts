import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comentario-label',
  templateUrl: './app/comentario-label.html'
})
export class ComentarioLabelComponent {
  @Input() inputComentario: string;
  @Input() inputNombre: string;
  @Input() inputVotos: string;
  @Input() index: number;
  @Output() sumarVoto = new EventEmitter<number>();
  emitSumarVoto(index: number) {
    this.sumarVoto.emit(index);
  }
  @Output() restarVoto = new EventEmitter<number>();
  emitRestarVoto(index: number) {
    this.restarVoto.emit(index);
  }
}
