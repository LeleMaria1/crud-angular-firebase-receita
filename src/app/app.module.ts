import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

 

import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../environment';
import { ListReceitaComponent } from './receita/list-receita/list-receita.component';
import { EditReceitaComponent } from './receita/edit-receita/edit-receita.component';
import { AddReceitaComponent } from './receita/add-receita/add-receita.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app-routing.modules';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
 

@NgModule({

  declarations: [

    AppComponent,
     ListReceitaComponent,
     EditReceitaComponent,
     AddReceitaComponent

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,

    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,

    BrowserAnimationsModule, // required animations module

    ToastrModule.forRoot(), // ToastrModule added

    NgxPaginationModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
