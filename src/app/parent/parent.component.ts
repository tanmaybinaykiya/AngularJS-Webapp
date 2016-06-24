import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { HeaderComponent } from './header';
import { MdButton, MdAnchor } from '@angular2-material/button/button';

import { ParentService } from '../shared';
import { ChildrenComponent } from './children';
import { ProfileComponent } from './profile';

@Component({
    selector: 'my-parent',
    directives: [MdButton, MdAnchor, ...ROUTER_DIRECTIVES, HeaderComponent,
        ...MD_SIDENAV_DIRECTIVES, ...MD_LIST_DIRECTIVES, ...MD_TOOLBAR_DIRECTIVES],
    template: require('./parent.component.html'),
    styles: [require('./parent.component.scss')]
})
export class ParentComponent implements OnInit {

    constructor(private parentService: ParentService) {
    }

    ngOnInit() {
        
    }

    donate() {
        console.log('Thanks for intending to donate');
    }

}
