import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { CookieService } from 'angular2-cookie/core';

@Component({
    selector: 'parent-header-user-badge',
    viewProviders: [MdIconRegistry],
    template: require('./user-badge.component.html'),
    styles: [require('./user-badge.component.scss')]
})
export class ParentHeaderUserBadgeComponent implements OnInit {
    user = 'Dr. House';
    role = 'Parent';

    constructor(private cookieService: CookieService) {
    }

    ngOnInit() {
        console.log('Hello Home');
        let currentUser: any = this.cookieService.getObject('loggedInUser');
        this.user = currentUser.name;
        this.role = currentUser.role;
    }
}
