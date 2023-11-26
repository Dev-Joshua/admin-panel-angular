import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // const token = tokenService.getToken()
    // if (user?.role === 'admin') {
    //   router.navigate(['/admin']);
    //   return true;
    // } else {
    //   router.navigate(['/home']);
    //   return false;
    // }

    return this.authService.user$.pipe(
      map((user) => {
        if (!user) {
          // this.router.navigate(['/home']);
          return false;
        }

        return true;
      })
    );
  }
}
