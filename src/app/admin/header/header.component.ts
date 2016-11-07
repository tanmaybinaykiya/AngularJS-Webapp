import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-header-toolbar',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class AdminHeaderComponent implements OnInit {

    constructor(/*private loginService: LoginService, private schoolService: SchoolService*/) {
    }

    notificationMenu() {
        console.log('notificationMenu');
    }
    ngOnInit() {
        console.log('Hello Home');
    }
}
