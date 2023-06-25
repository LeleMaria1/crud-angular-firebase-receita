import { Component, OnInit } from '@angular/core';

import { ReceitaService } from '../receita.service';

import { ToastrService } from 'ngx-toastr';

import { Receita } from '../receita';

 

@Component({

  selector: 'app-list-receita',

  templateUrl: './list-receita.component.html',

  styleUrls: ['./list-receita.component.css'],

})

export class ListReceitaComponent implements OnInit {

  page = 1;

  listaReceitas: Receita[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;

 

  constructor(

    private receitaService: ReceitaService,

    private toastr: ToastrService

  ) {}

 

  ngOnInit() {

    let fetchData = this.receitaService.getReceitaList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listaReceitas = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let receita = item.payload.toJSON();

          receita['$key'] = item.key;

          this.listaReceitas.push(receita as Receita);

        });

      }

      this.mostrarLoader = false;

    });

  }

 

  deleteReceita(receita: Receita) {

    if (window.confirm('Tem certeza que deseja remover a receita?')) {

      if (receita.$key != null) {

        this.receitaService.deleteReceita(receita.$key);

        this.toastr.success(receita.nome + ' removida com sucesso.');

      }

    }

  }

}
