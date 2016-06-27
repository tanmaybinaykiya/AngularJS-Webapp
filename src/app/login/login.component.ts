import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';

import { LoginService, SchoolService } from '../shared';
import { ModalControlService } from '../lib/modal/modal-control.service';
import { Modal } from '../lib/enums/modal-names.enums';

import { User } from '../models/user';

@Component({
    selector: 'my-login',
    template: require('./login.component.html'),
    directives: [...MD_BUTTON_DIRECTIVES, ...MD_INPUT_DIRECTIVES, MdIcon, REACTIVE_FORM_DIRECTIVES],
    providers: [MdIconRegistry],
    styles: [require('./login.component.scss')]
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    errorMessage: string;
    name: string;

    constructor(private loginService: LoginService, private router: Router,
        private school: SchoolService, private modalControlService: ModalControlService) {
    }

    ngOnInit() {
        console.log('Hello Home');
    }

    login() {
        let self = this;
        this.loginService.login(this.email, this.password)
            .subscribe(
            function (currentUser: User) {
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
                    self.errorMessage = 'Not a valid user';
                }

            },
            error => this.errorMessage = <any>error);

    }

    forgotPassword() { }

    joinToday() { }

    handler(password: string, email:string) {
        console.log('key: ',password, email);
        this.login();
    }

    toggleModal(modal: Modal) {
        console.log('Login: toggleModal', modal);
        this.modalControlService.enable(modal);
    }

}
