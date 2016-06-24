import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { HeaderComponent } from './header';
import { MdButton, MdAnchor } from '@angular2-material/button/button';

import { EnrollmentCenterComponent } from './enrollment-center';
import { PeopleComponent } from './people/';
import { BillingComponent } from './billing/';
import { NotificationComponent } from './notification/';
import { AdministrationComponent } from './administration/';
import { LoginService } from '../shared/api.service'

@Component({
    selector: 'admin',
    directives: [MdButton, MdAnchor, ...ROUTER_DIRECTIVES,
        HeaderComponent, ...MD_SIDENAV_DIRECTIVES, ...MD_LIST_DIRECTIVES,
        ...MD_TOOLBAR_DIRECTIVES],
    template: require('./admin.component.html'),
    styles: [require('./admin.component.scss')]
})

export class AdminComponent implements OnInit {

    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello AdminComponent');
    }

    ngOnInit() {
        
    }

    donate() {
        console.log('Thanks for intending to donate');
    }
}
