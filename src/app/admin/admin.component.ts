import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { LoginService } from '../shared/api.service';
declare var Ultima: any;

@Component({
    selector: 'admin',
    template: require('./admin.component.html'),
    styles: [require('./admin.component.scss')]
})

export class AdminComponent implements OnInit, AfterViewInit {

    loggedInUser: User;

    constructor(private loginService: LoginService, private router: Router, private el: ElementRef) {
        console.log('Hello AdminComponent');
    }

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }

    ngOnInit() {
        this.loggedInUser = this.loginService.loggedInUser;
    }

    donate() {
        console.log('Thanks for intending to donate');
    }

    logout() {
        console.log('Logout called');
        this.loginService.loggedIn = false;
        this.loginService.loggedInUser = null;
        this.router.navigate(['/login']);
    }
}
