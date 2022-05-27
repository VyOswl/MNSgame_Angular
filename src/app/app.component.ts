import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MNSgame_Angular';
  public nom: string = "";

  constructor(
    //private tokenIdentification: TokenIdentificationService
  ) { }

  ngOnInit() {
    // this.tokenIdentification.utilisateur.subscribe(
    //   utilisateur => {
    //     if (utilisateur != null) {
    //       this.nom = utilisateur.sub;
    //     } else {
    //       this.nom = "";
    //     }
    //   }
    // );
  }
}