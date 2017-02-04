import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service';
import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) {
        console.log('Hello AdminGuard');
    }

    canActivate() {
        console.log('CAN ACTIVATE');
        let currentUser: any = this.cookieService.getObject('loggedInUser');
        console.log('Logged in user:', currentUser);
        console.log('Logged in use LS:', this.loginService.loggedInUser);
        if (currentUser && currentUser.role === 'admin') {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
