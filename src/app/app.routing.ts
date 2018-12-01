import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JogadorComponent} from './jogador/jogador.component'
import {ListaDejogadoresComponent} from './lista-dejogadores/lista-dejogadores.component'

const APP_ROUTES: Routes =[
    {path : 'jogador', component:JogadorComponent},
    {path : 'lista-dejogadores', component:ListaDejogadoresComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);