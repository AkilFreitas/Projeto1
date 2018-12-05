import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/entidades/jogador';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-lista-dejogadores',
  templateUrl: './lista-dejogadores.component.html',
  styleUrls: ['./lista-dejogadores.component.css'],
  providers: [DBService]

})
export class ListaDejogadoresComponent implements OnInit {
  jogadores: Jogador[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarJogadores();
   }

  ngOnInit() {
  }

  private carregarJogadores() {
    this.carregando = true;

    this.database.listar<Jogador>('Jogador')
      .then(JogadorDB => {
        this.jogadores = JogadorDB;

        this.carregando = false;
      });
  }
  remover(uid: string) {
    this.database.remover('Jogador', uid)
      .then(() => {
        alert('jogador removido com sucesso');

        this.carregarJogadores();
      });
  }

  editar(Jogador) {
    Jogador.editando = true;
  }

  cancelEdit(Jogador) {
    Jogador.editando = false;
  }

  confirmEdit(Jogador) {
    this.database.atualizar('Jogador', Jogador.uid, { nome: Jogador.nome, posicao: Jogador.posicao, time: Jogador.time, idade: Jogador.idade})
      .then(() => {
        alert('jogador atualizado com sucesso');
        this.carregarJogadores();
      });
  }
}