import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service';
import { Injectable } from '@angular/core';

@Injectable()
export class SuperAdminGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello SuperAdminGuard');
    }
    canActivate() {
        if (this.loginService.loggedInUser && this.loginService.loggedInUser.role === 'SECS') {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
