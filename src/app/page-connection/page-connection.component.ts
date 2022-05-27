import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-page-connection',
  templateUrl: './page-connection.component.html',
  styleUrls: ['./page-connection.component.css']
})
export class PageConnectionComponent implements OnInit {

  public formControl: FormGroup = this.formBuilder.group({
    "firstname": ["", [Validators.required, Validators.minLength(3)]],
    "lastname": ["", [Validators.required, Validators.minLength(3)]],
    "email": ["", [Validators.required, Validators.email]],
    "password": ["", [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private client: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    //private tokenIdentification: TokenIdentificationService
  ) { }

  ngOnInit(): void {
  }

  callSignUp() {
    $('.container').addClass('right-panel-active');
  }

  callSignIn() {
    $('.container').removeClass('right-panel-active');
  }

  onSignIn() {

    const user = this.formControl.value;

    this.client.post('http://' + 'localhost:8080' + '/connection', user)
      .subscribe((response: any) => {
        if (response.erreur) {
          alert(response.erreur);
        } else {
          localStorage.setItem('token', response.token);
          alert('Connexion réussie');
          //this.tokenIdentification.raffraichirToken()
          this.router.navigateByUrl("");
        }
      });
  }
}
