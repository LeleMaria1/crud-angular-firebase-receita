import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { ReceitaService } from '../receita.service';

 

import { ToastrService } from 'ngx-toastr';

 

@Component({

  selector: 'app-add-receita',

  templateUrl: './add-receita.component.html',

  styleUrls: ['./add-receita.component.css']

})

export class AddReceitaComponent implements OnInit{

  receitaForm: FormGroup;

 

  constructor(

    private receitaService: ReceitaService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.receitaForm = this.createForm();

    }

 

    ngOnInit(){

      this.receitaService.getReceitaList();

    }

 

    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),

        ingredientes: new FormControl('', Validators.required),

        modopreparo: new FormControl('', Validators.required)

      });

    }

 

    resetForm(){

      this.receitaForm.reset();

    }

 

    submitForm(){

      this.receitaService.insertReceita(this.receitaForm.value);

      this.toastr.success(

        this.receitaForm.controls['nome'].value + " adicionado"

      );

    }

 

    get nome(){

      return this.receitaForm.get('nome');

    }

 

    get ingredientes(){

      return this.receitaForm.get('ingredientes');

    }

 

    get modopreparo(){

      return this.receitaForm.get('modopreparo');

    }

}

 

 