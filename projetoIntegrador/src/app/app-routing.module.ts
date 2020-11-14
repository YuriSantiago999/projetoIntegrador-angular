import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { notStrictEqual } from 'assert';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';

const routes: Routes = [
  // Ao iniciar o servidor redireciona para a página home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Rota para a página home
  { path: 'home', component: HomeComponent },
  // Rota para a página sobre nós
  { path: 'sobre-nos', component: SobreNosComponent },
  // Rota para a página de cadastro
  { path: 'cadastrar', component: CadastrarComponent },
  // Rota para a página edita tema
  { path: 'edita-tema/:id', component: PutTemaComponent },
  // Rota para deletar Tema
  { path: 'delete-tema/:id', component: DeleteTemaComponent }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
