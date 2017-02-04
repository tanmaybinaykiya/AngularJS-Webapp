import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { SchoolService } from '../../service';
import { School } from '../../models';

@Component({
    selector: 'myss-parent-header-toolbar',
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
        let institutionCode = currentUser.institutionCode;
        let schoolCode = currentUser.schoolCode;
        let self = this;
        self.isLoading = true;
        this.schoolService.getSchoolsByInstitutionAndSchoolCode(institutionCode, schoolCode)
            .subscribe(function (school: School) {
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
