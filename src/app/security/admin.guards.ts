import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../shared/api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello AdminGuard');
    }
    canActivate() {
        if (this.loginService.loggedInUser && this.loginService.loggedInUser.role === 'admin') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
