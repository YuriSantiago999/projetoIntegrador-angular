import { Usuario } from './../model/Usuario';
import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import {faDumpster} from '@fortawesome/free-solid-svg-icons';
import {faGratipay} from '@fortawesome/free-brands-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { faListAlt, faTimesCircle, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { getAllStates} from "easy-location-br";
import { AlertasService } from '../service/alertas.service';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  usuario: Usuario = new Usuario();

  nomeUser= localStorage.getItem("nome");
  emailUser= localStorage.getItem("email");
  imagemUser= localStorage.getItem("imagem");
  idUser= Number(localStorage.getItem("id"));

  estados = [];
  estadoId: string;

  key =  'data';
  reverse = true;

  senha: string;

  faListAlt = faListAlt;
  faTimesCircle = faTimesCircle;
  faUserCog = faUserCog;
  faPlusSquare = faPlusSquare;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  palavra: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  nomeTema: string;
  idTema: number;

  estado: string;


  faSearch = faSearch;
  faDumpster = faDumpster;
  faGratipay = faGratipay;
  faPen = faPen;

  curtidas: number = 0;

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService

  ) { }

  ngOnInit() {
    this.estados = getAllStates();

    let token = localStorage.getItem('token');

    if (token == null) {
      this.router.navigate(['/home']);
      this.alert.showAlertInfo('Faça o Login antes de entrar no Feed !!');
    }

    window.scroll(0, 0);

    this.findAllPostagens();
    this.findAllTemas();

    let id= this.route.snapshot.params['id'];
    this.findByIdUsuario(id);
  }

  conferirSenha(event: any) {
    this.senha = event.target.value;
  }

  estadoSelecionado(event: any) {
    this.estadoId = event.target.value;
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    })
  }

  findByPalavraPostagem(){
    if(this.palavra === ''){
      this.findAllPostagens();
    }else{
    this.postagemService.getByPalavraPostagem(this.palavra).subscribe((resp: Postagem[]) =>
    this.listaPostagens = resp
    )}
  }

  findByNomeTema(){
    if(this.nomeTema === ''){
      this.findAllTemas();
    }else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=> {
        this.listaTemas = resp;
      })
    }

  }

  findByEstadoTema(){
    if(this.estado === ''){
      this.findAllTemas();
    }else{
      this.temaService.getByEstadoTema(this.estado).subscribe((resp: Tema[]) => {
        this.listaTemas = resp;
      });
    }
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    if (this.postagem.tema == null || this.postagem.postagem == null) {
      this.alert.showAlertDanger('Preencha sua postagem com um tema e conteúdo!');
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp;
        this.postagem = new Postagem();
        this.alert.showAlertSuccess('Postagem realizada com sucesso!');
        this.findAllPostagens();
      });
    }
  }

  postar(){
    this.tema.estado=this.estadoId
    if(this.tema.tema==null || this.tema.categoria==null  ){
      this.alert.showAlertDanger('Preencha os campos corretamente');

    }else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp;
        this.router.navigate(['/feed']);
        this.alert.showAlertSuccess('tema cadastrado com sucesso');
      });

    }

  }

  curtida() {
    this.curtidas += 1;
  }

  findByIdUsuario(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  atualizarUser() {
    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario= resp;
      this.alert.showAlertSuccess('Usuário atualizado com sucesso!');
      localStorage.clear();
      this.router.navigate(['/home']);
    })
  }
}
