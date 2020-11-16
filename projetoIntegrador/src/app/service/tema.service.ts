import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllTemas() {
    return this.http.get('http://localhost:8080/tema', this.token);
  }

  getByIdTema(id: number) {
    return this.http.get(`http://localhost:8080/tema/id/${id}`, this.token);
  }

  getByNomeTema(nome: string) {
      return this.http.get(`http://localhost:8080/tema/tema/${nome}`, this.token);
  }

  getByEstadoTema (estado: string) {
    return this.http.get(`http://localhost:8080/tema/estado/${estado}`, this.token);
  }

  postTema(tema:Tema){
    return this.http.post('http://localhost:8080/tema', tema, this.token);

  }
}
