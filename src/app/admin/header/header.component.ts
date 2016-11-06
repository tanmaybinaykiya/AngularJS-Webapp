import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-toolbar',
    template: './header.component.html',
    styles: ['./header.component.scss']
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
