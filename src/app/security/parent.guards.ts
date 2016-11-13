import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../shared/api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ParentGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello ParentGuard');
    }
    canActivate() {
        console.log('ParentGuard', this.loginService.dummyVar, this.loginService.loggedInUser);
        if (this.loginService.loggedInUser && this.loginService.loggedInUser.role === 'parent') {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }

    }
}
