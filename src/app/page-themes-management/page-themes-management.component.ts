import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-themes-management',
  templateUrl: './page-themes-management.component.html',
  styleUrls: ['./page-themes-management.component.css']
})
export class PageThemesManagementComponent implements OnInit {
  public themesList: any;
  public creator: boolean = false;
  public idConnectedUser: number = 0;
  public containerVisible = "hidden";

  public themeFormControl: FormGroup = this.formBuilder.group({
    "name": ["", [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private client: HttpClient,
    private tokenIdentification: TokenIdentificationService,
  ) { }

  ngOnInit(): void {
    this.tokenIdentification.refreshToken()

    this.tokenIdentification.user.subscribe(
      user => {
        this.creator = user != null && user.droits.includes("creator");
        console.log(this.creator);
        console.log(user.droits);
        console.log(user.id)
        this.idConnectedUser = user.id;

      }
    );
    this.refreshThemesList();
  }

  public onEditTheme(idTheme: number) {

  }

  public onDeleteTheme(idTheme: number) {

  }

  public newTheme() {
    this.containerVisible = "visible";
  }

  public createTheme(): void {
    if (this.themeFormControl.valid) {
      console.log("ok fonction");
      const theme = this.themeFormControl.value;
      this.client.post("http://" + environment.serverAddress + "/creator/new-theme", theme)
        .subscribe(theme => {
          if (theme) {
            alert("thème créé")
            console.log("thème créé")
          } else {
            alert("erreur")
          }
        })
    }
    this.refreshThemesList();
  }

  public refreshThemesList() {
    this.client.get('http://' + environment.serverAddress + '/creator/list-theme')
      .subscribe(response => this.themesList = response);
  }

  public exitNewTheme() {
    this.containerVisible = "hidden";
  }
}
