import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { User } from '../models/user';
import { SchoolService, LoginService } from '../service';

@Component({
    selector: 'my-login-app',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')],
})
export class LoginComponent {

    name: string;
    email: string;
    password: string;
    errorMessage: string;
    isRequested: boolean = false;
    form: FormGroup;

    constructor(private loginService: LoginService, private schoolService: SchoolService,
        private router: Router, fbld: FormBuilder, private cookieService: CookieService) {
        console.log('Hello LoginComponent: ');
        this.form = fbld.group({});
    }

    get isValid(): boolean {
        return !(
            (this.email == null || this.email === '')
            || (this.password == null || this.password === '')
            || (this.isRequested)
        );
    }

    setErrorMessage(message: string) {
        let self = this;
        self.errorMessage = message;
        setTimeout(function () {
            self.errorMessage = null;
        }, 2500);
    }

    login() {
        let self = this;
        self.isRequested = true;
        this.loginService.login(this.email, this.password)
            .subscribe((currentUser: User) => {
                console.log('currentUser:', currentUser);
                self.cookieService.putObject('loggedInUser', currentUser);
                switch (currentUser.role) {
                    case 'parent':
                        // self.loginService.loggedInUser = currentUser;
                        // self.loginService.loggedIn = true;
                        self.isRequested = false;
                        self.router.navigate(['/parent']);
                        break;
                    case 'SECS':
                        self.isRequested = false;
                        self.router.navigate(['/superadmin']);
                        break;
                    case 'admin':
                        self.schoolService.getSchoolsByInstitutionCode(currentUser.institutionShortCode)
                            .subscribe(schools => {
                                self.isRequested = false;
                                if (schools.length === 0) {
                                    self.cookieService.putObject('loggedInUser', currentUser);
                                    self.router.navigate(['admin/administration/school']);
                                } else {
                                    currentUser.schools = {
                                        isSelectedIndex: 0,
                                        availableSchools: schools
                                    };
                                    self.cookieService.putObject('loggedInUser', currentUser);
                                    self.router.navigate(['/admin']);
                                }
                                self.loginService.loggedInUser = currentUser;
                            });
                        break;
                    default:
                        self.setErrorMessage('Not a valid user ' + currentUser + ' ' + currentUser.role);
                        break;
                }
            }, function (error) {
                self.isRequested = false;
                console.log('Error: ', error);
                self.setErrorMessage(error);
            });
    }

    forgotPassword() {
        console.log('forgotPassword');
    }

    joinToday() {
        console.log('joinToday');
    }

}
