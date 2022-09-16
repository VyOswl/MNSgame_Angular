import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-playgame',
  templateUrl: './page-playgame.component.html',
  styleUrls: ['./page-playgame.component.css']
})
export class PagePlaygameComponent implements OnInit {

  private idScenario: number | undefined;
  public idConnectedUser: number | undefined;
  public idQuestion: number = 0;
  public idAnswer: number | undefined;

  public scenario: any;
  public question: any;
  public answers: any;

  constructor(
    private client: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private tokenIdentification: TokenIdentificationService,

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idScenario = params['idScenario'];
    });

    this.tokenIdentification.user.subscribe(
      user => {
        if (user != null) {
          this.idConnectedUser = user.id;
        } else {
          this.idConnectedUser = 0;
        }
      }
    );

    this.client.get("http://" + environment.serverAddress + "/creator/scenario/" + this.idScenario)
      .subscribe(reponse => this.scenario = reponse);
    this.generateFirstQuestion(<number>this.idScenario);
  }

  public generateFirstQuestion(idScenario: number) {
    this.client.get("https://" + environment.serverAddress + "/scenario/" + idScenario + "/first-question")
      .subscribe(response => {
        this.question = response;
        this.idQuestion = this.question.id;
        const idQ = this.idQuestion;
        this.generateAnswers(idQ);
      });
  }

  public generateAnswers(idQuestion: number) {
    this.client.get("https://" + environment.serverAddress + "/scenario/question/" + idQuestion + "/answers")
      .subscribe(response => {
        this.answers = response;
      });
  }

  public selectAnswer(idAnswer: number) {
    this.idAnswer = idAnswer;
  }
  public validate() {
    this.client.post("https://" + environment.serverAddress + "/scenario/" + this.idScenario + "/user/"
      + this.idConnectedUser + "/question/" + this.idQuestion + "/answer/" + this.idAnswer, null)
      .subscribe();

    this.client.get("https://" + environment.serverAddress + "/scenario/chained-question/answer/" + this.idAnswer)
      .subscribe((response: any) => {
        if (response == null) {
          this.router.navigateByUrl('/user/results/scenario/?idScenario=' + this.idScenario);
        } else {
          this.idQuestion = <number>response;
          console.log("texte" + this.idQuestion);
          this.generateQuestion(this.idQuestion);
          this.generateAnswers(this.idQuestion);
        }
      })
  }

  public generateQuestion(idQuestion: number) {
    this.client.get("http://" + environment.serverAddress + "/creator/question/" + idQuestion)
      .subscribe(response => this.question = response)
  }

}