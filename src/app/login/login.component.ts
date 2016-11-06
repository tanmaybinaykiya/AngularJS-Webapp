import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular2-material/icon/icon';

import { User } from '../models/user';
import { Modal } from '../lib/enums/modal-names.enums';
import { LoginService, SchoolService } from '../shared';
import { ModalControlService } from '../lib/modal/modal-control.service';


@Component({
    selector: 'my-login',
    viewProviders: [MdIconRegistry],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    errorMessage: string;
    name: string;
    isRequested: boolean = false;

    constructor(private loginService: LoginService, private router: Router,
        private schoolService: SchoolService, private modalControlService: ModalControlService) {
    }

    get isValid(): boolean {
        return !(
            (this.email == null || this.email === '')
            || (this.password == null || this.password === '')
            || (this.isRequested)
        );
    }

    ngOnInit() {
        console.log('Hello Home');
    }

    setErrorMessage(message: string) {
        this.errorMessage = message;
        let self = this;
        setTimeout(function () {
            self.errorMessage = null;
        }, 1500);
    }

    login() {
        let self = this;
        self.isRequested = true;
        this.loginService.login(this.email, this.password)
            .subscribe(
            function (currentUser: User) {
                self.isRequested = false;
                if (currentUser.role === 'parent') {
                    self.loginService.loggedInUser = currentUser;
                    self.loginService.loggedIn = true;
                    self.router.navigate(['/parent']);
                } else if (currentUser.role === 'superadmin') {
                    self.loginService.loggedInUser = currentUser;
                    self.loginService.loggedIn = true;
                    self.router.navigate(['/superadmin']);
                } else if (currentUser.role === 'admin') {
                    self.loginService.loggedInUser = currentUser;
                    self.loginService.loggedIn = true;
                    self.router.navigate(['/admin']);
                } else {
                    self.setErrorMessage('Not a valid user');
                }
            },
            function (error) {
                self.isRequested = false;
                self.setErrorMessage(error);
            });
    }

    forgotPassword() { }

    joinToday() { }

    handler(password: string, email: string) {
        console.log('key: ', password, email);
        this.login();
    }

    toggleModal(modal: Modal) {
        console.log('Login: toggleModal', modal);
        this.modalControlService.enable(modal);
    }

}
