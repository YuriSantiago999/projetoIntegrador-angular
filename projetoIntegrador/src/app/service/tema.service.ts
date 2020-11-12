import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  
  postTema(tema:Tema){
    return this.http.post('http://localhost:8080/tema',this.token  )

  }
  
  


  





}
