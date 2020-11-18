import { environment } from './../../environments/environment.prod';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp;
      environment.token = this.usuarioLogin.token;
      environment.nome = this.usuarioLogin.nome;
      environment.email = this.usuarioLogin.email;
      environment.imagem = this.usuarioLogin.imagem;
      environment.id = String(this.usuarioLogin.id);
      this.router.navigate(['/feed']);
    });
  }

}
