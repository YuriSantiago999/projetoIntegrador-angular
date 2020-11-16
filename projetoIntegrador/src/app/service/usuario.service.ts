import { Usuario } from './../model/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllUsuario() {
    return this.http.get('http://localhost:8080/usuarios', this.token);
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  putUsuario(user: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', user, this.token);
  }
}
