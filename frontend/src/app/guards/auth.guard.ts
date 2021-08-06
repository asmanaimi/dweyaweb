import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PharmacienService } from '../service/pharmacien.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _pharmacienService: PharmacienService,
    private _router :Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._pharmacienService.isLoggedIn()) {
      return true;
    }

    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }} );
    return false;
  }
}