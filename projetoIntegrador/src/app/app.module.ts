import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { FeedComponent } from './feed/feed.component';
<<<<<<< HEAD
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';


 


//import { PostarTemaComponent } from './postar-tema/postar-tema.component';

=======
import { PutDadosPessoaisComponent } from './put-dados-pessoais/put-dados-pessoais.component';
>>>>>>> putDadosPessoais

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SobreNosComponent,
    CadastrarComponent,
    NavbarComponent,
    PerfilLateralComponent,
    FeedComponent,
<<<<<<< HEAD
    PutTemaComponent,
    DeleteTemaComponent,
    //DeleteTemaComponent
    
    //PostarTemaComponent
=======
    PutDadosPessoaisComponent,
>>>>>>> putDadosPessoais
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
