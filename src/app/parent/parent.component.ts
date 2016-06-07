import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { ParentService } from '../shared';
import { ChildrenComponent } from './children';
import { ProfileComponent } from './profile';

@Component({
    selector: 'my-parent',
    providers: [ParentService],
    directives: [...ROUTER_DIRECTIVES, ...MD_SIDENAV_DIRECTIVES, ...MD_LIST_DIRECTIVES, ...MD_TOOLBAR_DIRECTIVES],
    template: require('./parent.component.html'),
    styles: [require('./parent.component.scss')]
})

@RouteConfig([
    { path: '/Children', component: ChildrenComponent, name: 'Children', useAsDefault: true },
    { path: '/Profile', component: ProfileComponent, name: 'Profile' }
])

export class ParentComponent implements OnInit {

    constructor(private parentService: ParentService) {

    }

    ngOnInit() {
        console.log('Hello Home');
    }
}
