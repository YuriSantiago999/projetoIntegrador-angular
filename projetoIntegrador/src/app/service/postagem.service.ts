<<<<<<< HEAD
import { Postagem } from './../model/Postagem';
=======
>>>>>>> feed
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token);
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token)
  }
=======

  token = {
    headers: new HttpHeaders().set('Authorization',localStorage.getItem('token'))
  }


  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens',this.token)
  }



  
>>>>>>> feed
}
