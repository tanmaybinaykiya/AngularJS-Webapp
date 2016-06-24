import { CanActivate,Router }    from '@angular/router';
import { LoginService } from '../shared/api.service'
import { Injectable } from '@angular/core';

@Injectable()
export class ParentGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello ParentGuard');
    }
    canActivate() {
        console.log(this.loginService.loggedInUser);
        if(this.loginService.loggedInUser && this.loginService.loggedInUser.role == 'parent'){
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}


@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello AdminGuard');
    }
    canActivate() {
        if(this.loginService.loggedInUser && this.loginService.loggedInUser.role == 'admin'){
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}

@Injectable()
export class SuperAdminGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello SuperAdminGuard');
    }
    canActivate() {
        if(this.loginService.loggedInUser && this.loginService.loggedInUser.role == 'superadmin'){
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}

export const APP_SECURITY = [
  SuperAdminGuard,AdminGuard,ParentGuard
];