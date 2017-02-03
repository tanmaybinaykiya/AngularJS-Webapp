import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { SchoolService } from '../../service';
import { Institution } from '../../models/institution';

@Component({
    selector: 'parent-header-toolbar',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class ParentHeaderComponent implements OnInit {

    private schoolName: String;
    isLoading: boolean = false;

    constructor(private cookieService: CookieService, private schoolService: SchoolService, private router: Router) {
        console.log('ParentHeaderComponent');
    }

    notificationMenu() {
        console.log('notificationMenu');
    }
    ngOnInit() {
        console.log('Hello ParentHeaderComponent');
        let currentUser: any = this.cookieService.getObject('loggedInUser');
        let institutionCode = currentUser.institutionShortCode;
        let self = this;
        self.isLoading = true;
        this.schoolService.getSchool(institutionCode)
            .subscribe(function (school: Institution) {
                console.log('school', school);
                self.isLoading = false;
                self.schoolName = school.name;
            },
            function (error) {
                console.log(error);
            });
    }

    logout() {
        console.log('Logout called');
        this.cookieService.remove('loggedInUser');
        this.router.navigate(['/login']);
    }
}
