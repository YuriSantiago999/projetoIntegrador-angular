import { Postagem } from './../model/Postagem';
<<<<<<< HEAD
=======
>>>>>>> cadastrar-tema
=======
>>>>>>> putDadosPessoais
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

<<<<<<< HEAD
  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token);
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token);
  }
<<<<<<< HEAD

  putPostagem(postagem: Postagem) {
    return  this.http.put('http://localhost:8080/postagens',postagem, this.token)
  }
  getByPalavraPostagem(palavra : string) {
    return this.http.get(`http://localhost:8080/postagens/postagens/${palavra}`, this.token)
  }
  
  getByIdPostagens(id: number){
    return this.http.get(`http://localhost:8080/postagens/${id}`,this.token)
  }

  
=======
  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token)
  }
>>>>>>> cadastrar-tema
=======
>>>>>>> putDadosPessoais
}
