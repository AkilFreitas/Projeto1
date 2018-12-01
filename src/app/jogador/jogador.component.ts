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
  carregando: boolean;
  constructor(private database: DBService, private router: Router) {
    this.novoJogador = new Jogador();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.database.inserir('Jogador', this.novoJogador)
      .then(() => {
        alert('jogador cadastrado com sucesso');
        this.router.navigate(["lista-dejogadores"]);
        this.novoJogador = new Jogador();
      });
  }
}