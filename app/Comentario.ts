import { IComentario } from './IComentario';

export class Comentario implements IComentario {
    comentario: string;
    nombre: string;
    votos: number;

    constructor(comentario?: string, nombre?: string, votos?: number) {
        this.comentario = comentario || '';
        this.nombre = nombre || '';
        this.votos = votos || 0;
    }

    getComentario() {
        return this.comentario;
    }

    setComentario(comentario: string) {
        this.comentario = comentario;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getVotos() {
        return this.votos;
    }

    setVotos(votos: number) {
        this.votos = votos;
    }

}