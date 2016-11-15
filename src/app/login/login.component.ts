import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

import { User } from '../models/user';
import { LoginService, SchoolService } from '../shared';

@Component({
    selector: 'my-login-app',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')]
})
export class LoginComponent {

    name: string;
    email: string;
    password: string;
    errorMessage: string;
    isRequested: boolean = false;
    form: FormGroup;

    constructor(private loginService: LoginService, private schoolService: SchoolService,
        private router: Router, fbld: FormBuilder) {
        console.log('Hello LoginComponent');
        this.form = fbld.group({});
    }

    get isValid(): boolean {
        return !(
            (this.email == null || this.email === '')
            || (this.password == null || this.password === '')
            || (this.isRequested)
        );
    }

    get diagnostic() { return JSON.stringify({ email: this.email, password: this.password }); }

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
            .subscribe(
            function (currentUser: User) {

                self.isRequested = false;
                switch (currentUser.role) {

                    case 'parent':
                        self.loginService.loggedInUser = currentUser;
                        self.loginService.loggedIn = true;
                        self.router.navigate(['/parent']);
                        break;

                    case 'superadmin':
                        self.loginService.loggedInUser = currentUser;
                        self.loginService.loggedIn = true;
                        self.router.navigate(['/superadmin']);
                        break;

                    case 'admin':
                        self.loginService.loggedInUser = currentUser;
                        self.loginService.loggedIn = true;
                        self.router.navigate(['/admin']);
                        break;

                    default:
                        self.setErrorMessage('Not a valid user');
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
