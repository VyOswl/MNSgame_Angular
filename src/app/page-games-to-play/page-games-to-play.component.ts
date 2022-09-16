import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-games-to-play',
  templateUrl: './page-games-to-play.component.html',
  styleUrls: ['./page-games-to-play.component.css']
})
export class PageGamesToPlayComponent implements OnInit {
  public scenarioList: any;

  constructor(
    private client: HttpClient,
    private tokenIdentification: TokenIdentificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshScenarioList();
  }

  public refreshScenarioList() {
    this.client.get('http://' + environment.serverAddress + '/creator/list-scenario')
      .subscribe(response => this.scenarioList = response);
  }

  public scenarioMoreInformations() { }

  public onDeleteScenario(idScenario: number) { }

  public redirectionPlayingGame(idScenario: number) {
    this.router.navigateByUrl('/user/startgame/?idScenario=' + idScenario);

  }

  public redirectionNewScenario() {
    this.router.navigateByUrl('creator/scenario/new');
  }
}