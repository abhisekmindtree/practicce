import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.authService.isUserLoggedIn()) {
            this.authService.redirectUrl = state.url; 
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }
}