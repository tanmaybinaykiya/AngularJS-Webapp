import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { User } from '../models/user';
import { LoginService } from '../shared/login.service';
declare var Ultima: any;

@Component({
    selector: 'admin',
    template: require('./admin.component.html'),
    styles: [require('./admin.component.scss')],
})
export class AdminComponent implements OnInit, AfterViewInit {

    loggedInUser: any;

    constructor(private loginService: LoginService, private router: Router, private el: ElementRef, private cookieService: CookieService) {
        console.log('Hello AdminComponent');
    }

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }

    ngOnInit() {
        this.loggedInUser = this.cookieService.getObject('loggedInUser');
    }

    donate() {
        console.log('Thanks for intending to donate');
    }

    logout() {
        console.log('Logout called');
        this.cookieService.remove('loggedInUser');
        this.router.navigate(['/login']);
    }
}
