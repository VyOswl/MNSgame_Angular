import { Component } from '@angular/core';
import { TokenIdentificationService } from './token-identification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MNS GAMES';
  public email: string = "";

  constructor(
    private tokenIdentification: TokenIdentificationService
  ) { }

  ngOnInit() {
    this.tokenIdentification.user.subscribe(
      user => {
        if (user != null) {
          this.email = user.sub;
        } else {
          this.email = "";
        }
      }
    );
    this.tokenIdentification.refreshToken();
  }
}