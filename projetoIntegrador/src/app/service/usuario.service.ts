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
    return this.http.get('http://localhost:8080/tema', this.token);
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/tema/id/${id}`, this.token)
  }

}
