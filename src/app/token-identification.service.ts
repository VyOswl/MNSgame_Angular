import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TokenIdentificationService {

  constructor() { }

  //Need application to load new token while login with another user
  public user: BehaviorSubject<any> = new BehaviorSubject(null);

  // change function from get token body to get token of Connected User
  public refreshToken() { //extractionToken
    if (localStorage.getItem("token") != null) {
      const token: any = localStorage.getItem("token");
      try {
        this.user.next(JSON.parse(atob(token.split(".")[1])));
        //return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        this.user.next(null);
      }
    } else {
      this.user.next(null);
    }
    //return null;
  }

  public onTokenExprired() {
    localStorage.removeItem("token");
    this.refreshToken();
    //this.utilisateur.next(null);
  }
}