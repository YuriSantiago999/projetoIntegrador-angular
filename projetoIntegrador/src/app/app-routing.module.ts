import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { notStrictEqual } from 'assert';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  // Ao iniciar o servidor redireciona para a página home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Rota para a página sobre nós
  { path: 'sobre-nos', component: SobreNosComponent },
  // Rota para a página de cadastro
  { path: 'cadastrar', component: CadastrarComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
