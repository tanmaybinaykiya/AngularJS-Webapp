import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/login.service';
import { SchoolService } from '../../shared';
import { Institution } from '../../models/institution';

@Component({
    selector: 'parent-header-toolbar',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class ParentHeaderComponent implements OnInit {

    private schoolName: String;
    isLoading: boolean = false;

    constructor(private loginService: LoginService, private schoolService: SchoolService,
        private router: Router) {
        console.log('ParentHeaderComponent');
    }

    notificationMenu() {
        console.log('notificationMenu');
    }
    ngOnInit() {
        console.log('Hello ParentHeaderComponent', this.loginService.loggedInUser.institutionShortCode);
        let institutionCode = this.loginService.loggedInUser.institutionShortCode;
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
        console.log('logout triggered');
        this.loginService.loggedIn = false;
        console.log('navigating');
        this.router.navigate(['/login']);
        console.log('navigated');
    }
}
