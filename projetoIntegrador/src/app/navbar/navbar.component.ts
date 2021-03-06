import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { PostagemService } from '../service/postagem.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  faSearch = faSearch;


  constructor(
    public auth: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['/home']);
    environment.token = '';
  }


}
