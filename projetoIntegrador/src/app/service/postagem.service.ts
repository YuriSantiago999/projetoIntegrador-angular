import { Postagem } from './../model/Postagem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllPostagens() {
    return this.http.get('https://reciclamente.herokuapp.com/postagens', this.token);
  }

  getByIdPostagem(id: number) {
    return this.http.get(`https://reciclamente.herokuapp.com/postagens/${id}`, this.token);
  }
  getByPalavraPostagem(palavra: string) {
    return this.http.get(`https://reciclamente.herokuapp.com/postagens/postagens/${palavra}`, this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('https://reciclamente.herokuapp.com/postagens', postagem, this.token);
  }

  putPostagem(postagem: Postagem) {
    return  this.http.put('https://reciclamente.herokuapp.com/postagens',postagem, this.token)
  }

  
  getByIdPostagens(id: number){
    return this.http.get(`https://reciclamente.herokuapp.com/postagens/${id}`,this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`https://reciclamente.herokuapp.com/postagens/id/${id}`, this.token);
  }
}
