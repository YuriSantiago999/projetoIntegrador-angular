import { Component, OnInit } from '@angular/core';
import {faDumpster} from '@fortawesome/free-solid-svg-icons';
import {faGratipay} from '@fortawesome/free-brands-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key =  'data'
  reverse = true

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  palavra: string
  

  
 

  tema: Tema = new Tema();
  listaTemas: Tema[];
  nomeTema: string
  estado: string


  faSearch = faSearch
  faDumpster = faDumpster;
  faGratipay = faGratipay;
  faPen = faPen;

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    
    private router: Router
  ) { }

  ngOnInit() {
      
    let token = localStorage.getItem('token')

    if(token == null) {
      this.router.navigate(['/home'])
      alert('Faça o Login antes de entrar no Feed !!')
    }

    window.scroll(0, 0);

    this.findAllPostagens();
    this.findAllTemas();
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
      this.findAllPostagens()
    }else{
    this.postagemService.getByPalavraPostagem(this.palavra).subscribe((resp: Postagem[]) =>
    this.listaPostagens = resp
    )}
  }

  findByNomeTema(){
    if(this.nomeTema === ''){
      this.findAllTemas()
    }else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=> {
        this.listaTemas = resp
      })
    }

  }

  findByEstadoTema(){
    if(this.estado === ''){
      this.findAllTemas()
    }else{
      this.temaService.getByEstadoTema(this.estado).subscribe((resp: Tema[])=> {
        this.listaTemas = resp
      })
    }
  }


  // teste curtida



}
