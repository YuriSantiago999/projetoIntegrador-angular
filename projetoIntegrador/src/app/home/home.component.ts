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
      console.log("oi");
      localStorage.setItem('token', this.usuarioLogin.token);
      this.router.navigate(['/sobre-nos']);
    });
  }

}
