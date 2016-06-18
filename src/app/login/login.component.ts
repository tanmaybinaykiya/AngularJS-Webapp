import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { LoginService, SchoolService } from '../shared';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { User } from '../models/user';
@Component({
    selector: 'my-login',
    template: require('./login.component.html'),
    providers: [LoginService, SchoolService],
    directives: [...MD_BUTTON_DIRECTIVES, ...MD_INPUT_DIRECTIVES],
    styles: [require('./login.component.scss')]
})

export class LoginComponent implements OnInit {
    username: string;
    password: string;
    errorMessage: string;

    constructor(private loginService: LoginService, private router: Router,
        private school: SchoolService) {
    }

    ngOnInit() {
        console.log('Hello Home');
    }

    login() {
        let self = this;
        this.loginService.login(this.username, this.password)
            .subscribe(
            function (currentUser: User) {
                if (currentUser.role === 'parent') {
                    self.router.navigate(['/Parent']);
                } else if (currentUser.role === 'superadmin') {
                    self.router.navigate(['/SuperAdmin']);
                } else if (currentUser.role === 'admin') {
                    self.router.navigate(['/Admin']);
                } else {
                    self.errorMessage = 'Not a valid user';
                }
            },
            error => this.errorMessage = <any>error);
    }

    forgotPassword() {
    }

    joinToday() {
    }

}
