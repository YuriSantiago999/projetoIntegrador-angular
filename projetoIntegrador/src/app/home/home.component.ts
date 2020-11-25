import { environment } from './../../environments/environment.prod';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  entrar() {
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp;
      environment.token = this.usuarioLogin.token;
      localStorage.setItem('nome', this.usuarioLogin.nome);
      localStorage.setItem('email', this.usuarioLogin.email);
      localStorage.setItem('imagem', this.usuarioLogin.imagem);
      localStorage.setItem('id', String(this.usuarioLogin.id));
      this.router.navigate(['/feed']);
    },
    err =>{
      if (err.status == '500') {
        this.alert.showAlertDanger('E-mail e senha incorretos')
      }
    });
  }

}
