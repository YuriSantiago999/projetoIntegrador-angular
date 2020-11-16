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
    return this.http.get('http://localhost:8080/postagens', this.token);
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagens/${id}`, this.token);
  }
  getByPalavraPostagem(palavra: string) {
    return this.http.get(`http://localhost:8080/postagens/postagens/${palavra}`, this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token);
  }

  putPostagem(postagem: Postagem) {
<<<<<<< HEAD
    return  this.http.put('http://localhost:8080/postagens',postagem, this.token)
  }
  getByPalavraPostagem(palavra : string) {
    return this.http.get(`http://localhost:8080/postagens/palavra/${palavra}`, this.token)
  }
  
  getByIdPostagens(id: number){
    return this.http.get(`http://localhost:8080/postagens/${id}`,this.token)
=======
    return  this.http.put('http://localhost:8080/postagens', postagem, this.token);
>>>>>>> c5e0fe074efea6d3488183d7b18ce27462b9f7ad
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagens/id/${id}`, this.token);
  }
}
