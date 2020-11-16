import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTimesCircle, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-put-dados-pessoais',
  templateUrl: './put-dados-pessoais.component.html',
  styleUrls: ['./put-dados-pessoais.component.css']
})
export class PutDadosPessoaisComponent implements OnInit {
  
  dadoPessoal: Usuario = new Usuario()
  
  faTimesCircle = faTimesCircle;
  faUserCog = faUserCog;

  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    
   } 
    
   salvar() {
    this.dadoPessoal = this.dadoPessoal;
  }

}
