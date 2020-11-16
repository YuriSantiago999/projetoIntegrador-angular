import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Tema } from './../model/Tema';
import { Component, OnInit } from '@angular/core'
import { faListAlt, faTimesCircle, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { getAllStates} from "easy-location-br";
import { Postagem } from '../model/Postagem';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  estados = [];
  estadoId: string;

  faListAlt = faListAlt;
  faTimesCircle = faTimesCircle;
  faUserCog = faUserCog;
  faPlusSquare = faPlusSquare;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;


  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];


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
        this.findAllPostagens();
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
    });
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }
  postar(){
    this.tema.estado=this.estadoId
    if(this.tema.tema==null || this.tema.categoria==null  ){
      alert('PREENCHA OS CAMPOS CORRETAMENTE');

    }else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp;
        this.router.navigate(['/home']);
        alert('tema cadastrado com sucesso');
      });

    }

  }
}

