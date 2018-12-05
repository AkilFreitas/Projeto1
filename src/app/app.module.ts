import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing} from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { JogadorComponent } from './jogador/jogador.component';
import { ListaDejogadoresComponent } from './lista-dejogadores/lista-dejogadores.component';
import { DBService } from './servicos/db.service';

import { ListaDeUniformeComponent } from './lista-de-uniforme/lista-de-uniforme.component';
import { UniformeComponent } from './uniforme/uniforme.component';

@NgModule({
  declarations: [
    AppComponent,
    JogadorComponent,
    ListaDejogadoresComponent,
    
    ListaDeUniformeComponent,
    
    UniformeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'jogador', component: JogadorComponent },
      { path: 'listaDejogadores', component: ListaDejogadoresComponent },
      { path: 'uniforme', component: UniformeComponent },
      { path: 'listaDeUniforme', component: ListaDeUniformeComponent }
    ])
  ],
  providers: [AngularFireDatabase,DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
