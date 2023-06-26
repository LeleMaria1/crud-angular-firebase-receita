import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ReceitaService } from '../receita.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';

 

@Component({

  selector: 'app-edit-receita',

  templateUrl: './edit-receita.component.html',

  styleUrls: ['./edit-receita.component.css']

})

export class EditReceitaComponent implements OnInit{

  receitaForm: FormGroup;

 

  constructor(

    private receitaService: ReceitaService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.receitaForm = this.createForm();

  }

 

  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      ingredientes: new FormControl('', Validators.required),

      modopreparo: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

    });

  }

 

  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.receitaService.getReceitaById(id).valueChanges().subscribe(data => {

        this.receitaForm.setValue(data as any);

      });

    }

  }

 

  submitForm(){

    this.receitaService.updateReceita(this.receitaForm.value);

    this.toastr.success(

      this.receitaForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-receita']);

  }

  goBack(){

    this.location.back();

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