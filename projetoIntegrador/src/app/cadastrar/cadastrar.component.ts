import { AuthService } from './../service/auth.service';
import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  senha: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService

  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value;
  }

  cadastrar() {
    if( this.senha === this.usuario.senha) {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/home']);
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso');
      });
    } else {
      this.alert.showAlertDanger('Senhas diferentes, tente novamente')
    }
  }

}
