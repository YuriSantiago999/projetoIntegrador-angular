import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public id: number;
  public postagem: string;
  public curtida: number;
  public data: Date;
  public imagem: string;
  public linkExterno: string;
  public tema: Tema;
  public usuario: Usuario;
}
