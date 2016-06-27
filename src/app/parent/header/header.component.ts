import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService, SchoolService } from '../../shared';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { UserBadgeComponent } from './userBadge/user-badge.component';
import { MdButton, MdAnchor } from '@angular2-material/button/button';

@Component({
    selector: 'header-toolbar',
    directives: [...MD_TOOLBAR_DIRECTIVES, UserBadgeComponent, MdButton, MdAnchor],
    providers: [SchoolService],
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class HeaderComponent implements OnInit {

    private schoolName: String;

    constructor(private loginService: LoginService, private schoolService: SchoolService,
        private router: Router) {
    }

    notificationMenu() {
        console.log('Header');
    }
    ngOnInit() {
        console.log('Hello Home');
        this.schoolName = this.schoolService.schoolName;
    }

    logout(){
        console.log('logout triggered');
        this.loginService.loggedIn=false;
        console.log('navigating');
        this.router.navigate(['/login']);
        console.log('navigated');
    }
}
