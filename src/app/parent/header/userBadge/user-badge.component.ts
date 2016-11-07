import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { LoginService } from '../../../shared';

@Component({
    selector: 'user-badge',
    viewProviders: [MdIconRegistry],
    templateUrl: './user-badge.component.html',
    styleUrls: ['./user-badge.component.scss']
})
export class ParentHeaderUserBadgeComponent implements OnInit {
    user = 'Dr. House';
    role = 'Parent';
    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
        console.log('Hello Home');
        this.user = this.loginService.loggedInUser.name;
        this.role = this.loginService.loggedInUser.role;
    }
}
