import { Router } from '@angular/router';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Tema } from './../model/Tema';
import { Component, OnInit } from '@angular/core';
import { faListAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { getAllStates} from "easy-location-br";
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  postagem: Postagem = new Postagem();


  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;

  estados = [];
  estadoId: string;

  faListAlt = faListAlt;
  faTimesCircle = faTimesCircle;

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.estados = getAllStates();
    this.findAllTemas();
    this.findByIdTema();
  }

  estadoSelecionado(event: any) {
    this.estadoId = event.target.value;
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    if (this.postagem.tema == null || this.postagem.postagem == null) {
      alert('Preencha sua postagem com um tema e conteúdo!');
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp;
        this.postagem = new Postagem();
        alert('Postagem realizada com sucesso!');
        // this.findAllPostagens();
      })
    }
  }

      findAllTemas() {
        this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
          this.listaTemas = resp;
        })
      }

      findByIdTema() {
        this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
          this.tema = resp;
        })
      }

}
