import { Component, OnInit } from '@angular/core';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  faUserCog = faUserCog
  faTimesCircle = faTimesCircle
  
  constructor() { }

  ngOnInit(): void {
  }

}
