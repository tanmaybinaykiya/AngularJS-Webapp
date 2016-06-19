import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MdButton, MdAnchor } from '@angular2-material/button/button';


@Component({
    selector: 'user-badge',
    directives: [...MD_TOOLBAR_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon, MdButton, MdAnchor],
    providers: [MdIconRegistry],
    template: require('./user-badge.component.html'),
    styles: [require('./user-badge.component.scss')]
})

export class UserBadgeComponent implements OnInit {
    user = 'Dr. House';
    role = 'Parent';
    constructor() {
    }

    ngOnInit() {
        console.log('Hello Home');
    }
}

