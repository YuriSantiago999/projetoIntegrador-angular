import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas() {
    return this.http.get('https://reciclamente.herokuapp.com/tema', this.token);
  }

  getByIdTema(id: number) {
    return this.http.get(`https://reciclamente.herokuapp.com/tema/id/${id}`, this.token);
  }

  getByNomeTema(nome: string) {
    return this.http.get(`https://reciclamente.herokuapp.com/tema/tema/${nome}`, this.token);
  }

  getByEstadoTema (estado: string) {
    return this.http.get(`https://reciclamente.herokuapp.com/tema/estado/${estado}`, this.token);
  }

  postTema(tema:Tema){
    return this.http.post('https://reciclamente.herokuapp.com/tema', tema, this.token);

  }

  putTema(tema: Tema){
    return this.http.put('https://reciclamente.herokuapp.com/tema', tema, this.token);
  }

  deleteTema(id: number) {
    return this.http.delete(`https://reciclamente.herokuapp.com/tema/${id}`, this.token);
  }
}
