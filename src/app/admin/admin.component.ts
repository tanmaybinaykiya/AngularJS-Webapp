import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/api.service'

@Component({
    selector: 'admin',
    template: require('./admin.component.html'),
    styles: [require('./admin.component.scss')]
})

export class AdminComponent implements OnInit {

    constructor(private loginService: LoginService, private router: Router) {
        console.log('Hello AdminComponent');
    }

    ngOnInit() {
    }

    donate() {
        console.log('Thanks for intending to donate');
    }
}
