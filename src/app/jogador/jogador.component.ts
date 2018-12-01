import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Jogador } from 'src/entidades/jogador';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-Jogador',
  templateUrl: './Jogador.component.html',
  styleUrls: ['./Jogador.component.css'],
  providers: [DBService]
})
export class JogadorComponent implements OnInit {

  novoJogador: Jogador;

  Jogador: Jogador[];

  carregando: boolean;

  constructor(private database: DBService, private router: Router) {
    this.novoJogador = new Jogador();

    this.carregarJogador();
  }

  ngOnInit() {
  }

  private carregarJogador() {
    this.carregando = true;

    this.database.listar<Jogador>('Jogador')
      .then(JogadorDB => {
        this.Jogador = JogadorDB;

        this.carregando = false;
      });
  }

  cadastrar() {
    this.database.inserir('Jogador', this.novoJogador)
      .then(() => {
        alert('jogador cadastrado com sucesso');
        this.router.navigate(["lista-dejogadores"]);
        this.novoJogador = new Jogador();
        this.carregarJogador();
      });
  }

  remover(uid: string) {
    this.database.remover('Jogador', uid)
      .then(() => {
        alert('jogador removido com sucesso');

        this.carregarJogador();
      });
  }

  editar(Jogador) {
    Jogador.editando = true;
  }

  cancelEdit(Jogador) {
    Jogador.editando = false;
  }

  confirmEdit(Jogador) {
    this.database.atualizar('Jogador', Jogador.uid, { nome: Jogador.nome, posicao: Jogador.posicao })
      .then(() => {
        alert('jogador atualizado com sucesso');
        this.carregarJogador();
      });
  }
}
