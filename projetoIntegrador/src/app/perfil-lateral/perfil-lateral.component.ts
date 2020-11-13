import { Component, OnInit } from '@angular/core';
import { faListAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { getAllStates} from "easy-location-br";
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  estados = [];
  estadoId: string;
  faListAlt = faListAlt;
  faTimesCircle = faTimesCircle;
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }
  ngOnInit() {
    this.estados = getAllStates();
    
  }
  estadoSelecionado(event: any) {
    this.estadoId = event.target.value;
  }

  postar(){
    this.tema.id= this.idTema
    if(this.tema.tema==null || this.tema.categoria==null  ){
      alert('PREENCHA OS CAMPOS CORRETAMENTE')

    }else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
        this.tema =resp
        this.router.navigate(["/home"])
      alert('tema cadastrado com sucesso')
      
      
  
  
      })

    }
  
  }
}

