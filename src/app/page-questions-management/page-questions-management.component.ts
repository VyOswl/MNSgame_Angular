import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-questions-management',
  templateUrl: './page-questions-management.component.html',
  styleUrls: ['./page-questions-management.component.css']
})
export class PageQuestionsManagementComponent implements OnInit {

  constructor(
    private client: HttpClient,
    private tokenIdentification: TokenIdentificationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public questionsList: any;
  public admin: boolean = false;
  idConnectedUser: any;
  public themesList: any;

  containerVisible = "hidden";
  public questionFormControl: FormGroup = this.formBuilder.group({
    "content": ["", [Validators.required]],
    "theme": ["", [Validators.required]],
    "points": ["", [Validators.required]],

  });

  public firstAnswerFormControl: FormGroup = this.formBuilder.group({
    "content": ["", [Validators.required]],
    "isCorrect": [""]
  });

  public secondAnswerFormControl: FormGroup = this.formBuilder.group({
    "content": ["", [Validators.required]],
    "isCorrect": [""]
  });

  public themeFormControl: FormGroup = this.formBuilder.group({
    "name": ["", [Validators.required]],
  });


  ngOnInit(): void {
    this.refreshQuestionList();
    this.generateThemesList();

    this.tokenIdentification.user.subscribe(
      user => {
        this.admin = user != null && user.droits.includes("ROLE_CREATOR");
        console.log(this.admin);
        this.idConnectedUser = user.id
        console.log(this.idConnectedUser);
      }
    );
  }


  refreshQuestionList() {
    this.client.get('http://' + environment.serverAddress + '/admin/list-question')
      .subscribe(response => this.questionsList = response);
  }

  refreshQuestionsListByCreator() {
    this.client.get("http://" + environment.serverAddress + "/admin/questions/by-creatorId/" + this.idConnectedUser)
      .subscribe(response => this.questionsList = response);
  }


  refreshAllQuestionsList() {
    this.client.get("http://" + environment.serverAddress + "/creator/list-question")
      .subscribe(response => this.questionsList = response);
  }

  createTheme(): void {
    if (this.themeFormControl.valid) {

      console.log("ok fonction");
      const theme = this.themeFormControl.value;
      // const user = this.tokenIdentification.user;
      // console.log(user)
      this.client.post("http://" + environment.serverAddress + "/creator/list-theme", theme)
        .subscribe(theme => {
          if (theme) {
            alert("thème créé")
            console.log("thème créé")
          } else {
            alert("erreur")
          }
        })
    }
    this.generateThemesList();

  }

  newQuestion(): void {
    this.containerVisible = "visible";
  }

  createQuestion(): void {
    if (this.questionFormControl.valid) {
      const question = this.questionFormControl.value;

      const user = this.tokenIdentification.user;
      console.log(user)
      this.client.post("http://" + environment.serverAddress + "/creator/new-question", question)
        .subscribe(question => {
          if (question) {
            alert("question créée")
            console.log("io")

          } else {
            alert("erreur")
          }
        })
      this.createAnswers();
    } else {
      alert("remplissez tous les champs")
    }
    this.refreshQuestionList();
  }

  createAnswers(): void {
    if (this.firstAnswerFormControl.valid && this.secondAnswerFormControl.valid) {
      const answerOne = this.firstAnswerFormControl.value;
      const user = this.tokenIdentification.user;
      this.client.post("http://" + environment.serverAddress + "/creator/new-answer", answerOne)
        .subscribe(answerOne => {
          if (answerOne) {
            alert("réponse créée")
          } else {
            alert("erreur")
          }
        })

      const answerTwo = this.secondAnswerFormControl.value;
      this.client.post("http://" + environment.serverAddress + "/creator/new-question", answerTwo)
        .subscribe(answerTwo => {
          if (answerTwo) {
            alert("réponse créée")
          } else {
            alert("erreur")
          }
        })
      this.containerVisible = "hidden";
      this.refreshQuestionsListByCreator();
      //this.router.navigateByUrl('/admin/questions-management');



    } else {
      alert("remplissez tous les champs")
    }
  }

  public generateThemesList() {
    this.client.get('http://' + environment.serverAddress + '/creator/list-theme')
      .subscribe(response => this.themesList = response);
  }
  public exitNewQuestion() {
    this.containerVisible = "hidden";
  }

  onDelQ(id: number) {
    this.client.delete('http://' + environment.serverAddress + '/creator/question/delete/' + id)
      .subscribe(response =>
        this.refreshQuestionsListByCreator());
  }

  onEditQ(id: number) {
    this.router.navigateByUrl('/creator/question/update/' + id);
    // ---OU---
    //this.router.navigate(['creator/edit-question', id]);
  }
}