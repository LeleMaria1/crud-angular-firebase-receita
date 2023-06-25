import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddReceitaComponent } from './app/receita/add-receita/add-receita.component';

import { ListReceitaComponent } from './app/receita/list-receita/list-receita.component';

import { EditReceitaComponent } from './app/receita/edit-receita/edit-receita.component';

 

const routes: Routes = [

  { path: '', redirectTo: '/list-receita', pathMatch: 'full' },

  { path: 'add-receita', component: AddReceitaComponent },

  { path: 'list-receita', component: ListReceitaComponent },

  { path: 'edit-receita/:id', component: EditReceitaComponent }

];

@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],

  exports: [RouterModule],

  declarations: []

})

export class AppRoutingModule { } 