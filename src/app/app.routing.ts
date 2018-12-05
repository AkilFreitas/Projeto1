import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JogadorComponent} from './jogador/jogador.component';
import {ListaDejogadoresComponent} from './lista-dejogadores/lista-dejogadores.component';
import { UniformeComponent } from './uniforme/uniforme.component';

import { ListaDeUniformeComponent } from './lista-de-uniforme/lista-de-uniforme.component';
const APP_ROUTES: Routes =[
    {path : 'jogador', component:JogadorComponent},
    {path : 'lista-dejogadores', component:ListaDejogadoresComponent},
    {path : 'uniforme', component:UniformeComponent},
    
    {path : 'listaDeUniforme', component:ListaDeUniformeComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);