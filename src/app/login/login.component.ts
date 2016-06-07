import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { LoginService, SchoolService } from '../shared';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

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

    constructor(private loginService: LoginService, private router: Router, private school: SchoolService) {

    }

    ngOnInit() {
        console.log('Hello Home');
    }

    login() {
        console.log(this.username);
        console.log(this.password);
        this.router.navigate(['/Parent']);
    }

}
