import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../shared/api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello AdminGuard');
    }
    canActivate() {
        console.log('Logged in user:', this.loginService.dummyVar, this.loginService.loggedInUser);
        // if (this.loginService.loggedInUser && this.loginService.loggedInUser.role === 'Admin') {
        return true;
        // }
        // this.router.navigate(['login']);
        // return false;
    }
}
