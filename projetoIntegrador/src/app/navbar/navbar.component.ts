import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { PostagemService } from '../service/postagem.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]


  faSearch = faSearch
  postNome: string

  constructor(
    public auth: AuthService,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(): void {
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp
    })
  }

  
  findByTituloPostagem() {
    if(this.postNome === ''){
  this.findAllPostagens()
    }else {
      this.postagemService.getByTituloPostagem(this.postNome).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

}
