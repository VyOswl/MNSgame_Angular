import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-game-management',
  templateUrl: './page-game-management.component.html',
  styleUrls: ['./page-game-management.component.css']
})
export class PageGameManagementComponent implements OnInit {
  public scenarioList: any;

  constructor() { }

  ngOnInit(): void {
  }

}