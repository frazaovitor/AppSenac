import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public fGroup: FormGroup;
  
  constructor(private fBuilder: FormBuilder) {
    this.fGroup = this.fBuilder.group({
      'nome': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'sobrenome': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'cpf': [null, Validators.compose([Validators.required, Validators.pattern(/^\d{3}.\d{3}.\d{3}-\d{2}$/)])],
      'perfil': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'codigo': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'senha': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.fGroup.value);
  }

}
