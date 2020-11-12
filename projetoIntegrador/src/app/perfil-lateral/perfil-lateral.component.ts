import { Component, OnInit } from '@angular/core';
import { faListAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { getAllStates} from "easy-location-br";
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
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
  constructor() { }
  ngOnInit() {
    this.estados = getAllStates();
  }
  estadoSelecionado(event: any) {
    this.estadoId = event.target.value;
  }
}