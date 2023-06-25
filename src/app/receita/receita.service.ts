import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Receita } from './receita';

 

@Injectable({

  providedIn: 'root'

})

export class ReceitaService {

  listaReceitasRef: AngularFireList<Receita>;

  receitaRef: AngularFireObject<Receita>;

 

  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listaReceitasRef = this.db.list('list-receitas');

    this.receitaRef = this.db.object('list-receitas/' + 0);

  }

 

  // Inserir Receita

  insertReceita(receita: Receita) {

    this.listaReceitasRef.push({

      nome: receita.nome,

      telefone: receita.telefone,

      idade: receita.idade,

    });

  }

 

  // Buscar um único Objeto receita pelo seu ID

  getReceitaById(id: string): AngularFireObject<Receita> {

    this.receitaRef = this.db.object('list-receitas/' + id);

    return this.receitaRef;

  }

 

  // Fetch Students List

  getReceitaList(): AngularFireList<Receita> {

    return this.listaReceitasRef;

  }

 

  // Update Student Object

  updateReceita(receita: Receita) {

    this.receitaRef.update({

      nome: receita.nome,

      telefone: receita.telefone,

      idade: receita.idade,

    });

  }

 

  // Delete Student Object

  deleteReceita(id: String) {

    this.receitaRef = this.db.object('list-receitas/' + id);

    this.receitaRef.remove();

  }

}
