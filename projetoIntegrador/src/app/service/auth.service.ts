import { UsuarioLogin } from '../model/UsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin) {
    return this.http.post('https://reciclamente.herokuapp.com/usuarios/logar', usuarioLogin);
  }

  cadastrar(usuario: Usuario) {
    return this.http.post('https://reciclamente.herokuapp.com/usuarios/cadastrar', usuario);
  }

  navbarOk() {
    let ok = true;
    let token = localStorage.getItem('token');
    if (token == null) {
      ok = false;
    }
    return ok;
  }
  
  btnSair(){
      let ok = false
      let token = localStorage.getItem('token')

      if(token != null){
      ok = true
      }

      return ok
  }

  btnLogin(){

    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){
    ok = true
    }

    return ok


  }




}
