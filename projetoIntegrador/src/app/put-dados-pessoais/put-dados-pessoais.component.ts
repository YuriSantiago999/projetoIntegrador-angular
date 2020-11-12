import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-dados-pessoais',
  templateUrl: './put-dados-pessoais.component.html',
  styleUrls: ['./put-dados-pessoais.component.css']
})
export class PutDadosPessoaisComponent implements OnInit {
  
  /*criar dado pessoal EDITAR DEPOIS*/
  dadoPessoal: dadoPessoal = new dadoPessoal()

  constructor(
    private dadoPessoalService = dadoPessoalService
  ) { }

  ngOnInit(): void {
    /*criar o salvar EDITAR DEPOIS*/
   salvar() {
    this.dadoPessoal = this.dadoPessoal
   } 
    
  }

}
