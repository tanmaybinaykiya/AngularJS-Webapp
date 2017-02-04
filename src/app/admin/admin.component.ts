import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { LoginService } from '../service';
declare var Ultima: any;

@Component({
    selector: 'myss-admin',
    template: require('./admin.component.html'),
    styles: [require('./admin.component.scss')],
})
export class AdminComponent implements OnInit, AfterViewInit {

    loggedInUser: any;

    constructor(private router: Router, private el: ElementRef, private cookieService: CookieService) {
        console.log('Hello AdminComponent');
    }

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }

    ngOnInit() {
        this.loggedInUser = this.cookieService.getObject('loggedInUser');
        console.log('AdminComponent: ', this.loggedInUser);
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
