import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllTemas() {
    return this.http.get('http://localhost:8080/tema', this.token);
  }

  getByIdTema(id: number) {
    return this.http.get(`http://localhost:8080/tema/id/${id}`, this.token)
  }

}
=======

  token = {
    headers: new HttpHeaders().set('Authorization',localStorage.getItem('token'))
  }

  getAllTemas() {
    return this.http.get('http://localhost:8080/tema',this.token)
  }

  
}
>>>>>>> feed
