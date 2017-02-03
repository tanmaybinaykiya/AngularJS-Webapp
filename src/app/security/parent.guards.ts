import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service';
import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class ParentGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) {
        console.log('Hello ParentGuard');
    }

    canActivate() {
        let currentUser: any = this.cookieService.getObject('loggedInUser');
        console.log('Logged in user:', currentUser);
        if (currentUser && currentUser.role === 'parent') {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
