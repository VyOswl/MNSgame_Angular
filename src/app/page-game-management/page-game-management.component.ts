import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-game-management',
  templateUrl: './page-game-management.component.html',
  styleUrls: ['./page-game-management.component.css']
})
export class PageGameManagementComponent implements OnInit {
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

  public scenarioMoreInformations() {

  }

  public onDeleteScenario(idScenario: number) {

  }

  public redirectionPlayingGame(idScenario: number) {
    this.router.navigateByUrl('/user/playgame/?idScenario=' + idScenario);

  }

  public redirectionNewScenario() {
    this.router.navigateByUrl('creator/scenario/new');
  }
}