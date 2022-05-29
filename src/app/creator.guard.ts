import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenIdentificationService } from './token-identification.service';

@Injectable({
  providedIn: 'root'
})
export class CreatorGuard implements CanActivate {

  constructor(
    private tokenIdentification: TokenIdentificationService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.tokenIdentification.user.value != null &&
      this.tokenIdentification.user.value.droits.includes('CREATOR')) {
      return true;
    }

    return this.router.parseUrl('/connection');

  }
}