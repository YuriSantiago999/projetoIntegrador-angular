import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Tema } from './../model/Tema';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faListAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  faListAlt = faListAlt;
  faTimesCircle = faTimesCircle;


  postagem: Postagem = new Postagem();
  idPost: number;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.idPost = this.route.snapshot.params["id"];
    this.findByIdPostagem(this.idPost);

    this.findAllTemas();
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    })
  }



  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  atualizar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.router.navigate(['/feed']);
      this.alert.showAlertSuccess('Postagem atualizada com sucesso!');
    }, err => {
      if (err.status == '500') {
        this.alert.showAlertDanger('Preencha todos os campos adequadamente!')
      }
    })
  }

}
