import { Component, OnInit } from '@angular/core';
import { Uniforme } from 'src/entidades/uniforme';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-lista-de-uniforme',
  templateUrl: './lista-de-uniforme.component.html',
  styleUrls: ['./lista-de-uniforme.component.css'],
  providers: [DBService]

})
export class ListaDeUniformeComponent implements OnInit {
  uniformes: Uniforme[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarUniformes();
   }

  ngOnInit() {
  }

  private carregarUniformes() {
    this.carregando = true;

    this.database.listar<Uniforme>('Uniforme')
      .then(UniformeDB => {
        this.uniformes = UniformeDB;

        this.carregando = false;
      });
  }

  remover(uid: string) {
    this.database.remover('Uniforme', uid)
      .then(() => {
        alert('uniforme removido com sucesso');

        this.carregarUniformes();
      });
  }

  editar(Uniforme) {
    Uniforme.editando = true;
  }

  cancelEdit(Uniforme) {
    Uniforme.editando = false;
  }

  confirmEdit(Uniforme) {
    this.database.atualizar('Uniforme', Uniforme.uid, { padrao: Uniforme.padrao, qtd: Uniforme.qtd, numero: Uniforme.numero})
      .then(() => {
        alert('uniforme atualizado com sucesso');
        this.carregarUniformes();
      });
  }
}