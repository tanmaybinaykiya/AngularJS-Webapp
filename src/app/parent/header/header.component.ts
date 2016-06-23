import { Component, OnInit } from '@angular/core';
import { LoginService, SchoolService } from '../../shared';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { UserBadgeComponent } from './userBadge/user-badge.component';
import { MdButton, MdAnchor } from '@angular2-material/button/button';

@Component({
    selector: 'header-toolbar',
    directives: [...MD_TOOLBAR_DIRECTIVES, UserBadgeComponent, MdButton, MdAnchor],
    providers: [LoginService, SchoolService],
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class HeaderComponent implements OnInit {

    private schoolName: String;

    constructor(private loginService: LoginService, private schoolService: SchoolService) {
    }

    notificationMenu() {
        console.log('notificationMenu');
    }
    ngOnInit() {
        console.log('Hello Home');
        this.schoolName = this.schoolService.schoolName;
    }
}
