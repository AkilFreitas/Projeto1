import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Route, Router } from '@angular/router';
import { Uniforme } from 'src/entidades/uniforme';

@Component({
  selector: 'app-Uniforme',
  templateUrl: './Uniforme.component.html',
  styleUrls: ['./Uniforme.component.css'],
  providers: [DBService]
})
export class UniformeComponent implements OnInit { 
   novoUniforme: Uniforme;
  carregando: boolean;
  constructor(private database: DBService, private router: Router) {
    this.novoUniforme = new Uniforme();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.database.inserir('Uniforme', this.novoUniforme)
      .then(() => {
        alert('uniforme cadastrado com sucesso');
        this.router.navigate(["lista-DeUniforme"]);
        this.novoUniforme = new Uniforme();
      });
  }
}