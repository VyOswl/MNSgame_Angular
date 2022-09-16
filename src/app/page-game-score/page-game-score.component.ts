import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-game-score',
  templateUrl: './page-game-score.component.html',
  styleUrls: ['./page-game-score.component.css']
})
export class PageGameScoreComponent implements OnInit {
  public idConnectedUser: number = 0;
  public idScenario: number = 0;

  public score: number = 0;
  public user: any;
  public scenario: any;
  public correctAnswerList: any;
  public nameConnectedUser: any;

  constructor(
    private client: HttpClient,
    private tokenIdentification: TokenIdentificationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idScenario = params['idScenario'];
      console.log(this.idScenario);
    });

    this.client.get("https://" + environment.serverAddress + "/creator/scenario/" + this.idScenario)
      .subscribe(reponse => this.scenario = reponse);

    this.tokenIdentification.refreshToken;
    this.tokenIdentification.user.subscribe(
      user => {
        if (user != null) {
          this.nameConnectedUser = user.sub;
          this.idConnectedUser = user.id;
          console.log(this.idConnectedUser)

        } else {
          this.nameConnectedUser = "";
        }
      }
    );

    this.generateScore();
    this.correctAnswers();
  }

  public generateScore() {
    this.score = 0;
    this.client.get("https://" + environment.serverAddress + "/user/"
      + this.idConnectedUser + "/points-by-scenario/" + this.idScenario)
      .subscribe(response => this.score = <number>response)
  }

  public correctAnswers() {
    this.client.get("http://" + environment.serverAddress + "/user/"
      + this.idConnectedUser + "/correct-answers/" + this.idScenario)
      .subscribe(response => this.correctAnswerList = response)
  }

}