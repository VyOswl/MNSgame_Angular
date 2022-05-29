import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

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
    "password": ["", [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private client: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private tokenIdentification: TokenIdentificationService
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
    if (this.formControl.valid) { //to check if the form is valid without sending it to the server
      const utilisateur = this.formControl.value;

      this.client.post('http://' + environment.serverAddress + '/connexion', utilisateur)
        .subscribe((response: any) => {
          if (response.erreur) {
            alert(response.erreur);
          } else {
            localStorage.setItem('token', response.token);
            this.tokenIdentification.refreshToken()
            this.router.navigateByUrl("");
          }
        });
    }
  }
}