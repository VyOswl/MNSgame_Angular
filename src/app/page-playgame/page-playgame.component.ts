import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-playgame',
  templateUrl: './page-playgame.component.html',
  styleUrls: ['./page-playgame.component.css']
})
export class PagePlaygameComponent implements OnInit {
  private idScenario: number | undefined;
  public scenario: any;

  constructor(
    private client: HttpClient,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idScenario = params['idScenario'];
    });
    this.client.get("http://" + environment.serverAddress + "/creator/scenario/" + this.idScenario)
      .subscribe(reponse => this.scenario = reponse);
  }

  public return() {
    this.router.navigateByUrl('creator/scenario-management');
  }

  public playGame() {
    this.router.navigateByUrl('/user/playingGame/?idScenario=' + this.idScenario);
  }
}
