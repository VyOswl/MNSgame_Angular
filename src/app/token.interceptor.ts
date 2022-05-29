import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenIdentificationService } from './token-identification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenIdentification: TokenIdentificationService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let enTete;
    if (localStorage.getItem('token') != null) {

      const timestamp = this.tokenIdentification.utilisateur.value.exp;
      const dateExpiration = new Date(timestamp * 1000);

      if (dateExpiration < new Date()) {
        this.tokenIdentification.onTokenExprired();
        this.router.navigate(['/connection']);
        console.log('token expired');
        return EMPTY;
      }

      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    } else {
      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }
    const requeteClone = request.clone({
      headers: enTete
    });
    return next.handle(requeteClone);
  }
}
