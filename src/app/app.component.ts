import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { SchoolService } from './shared';
import { ModalControlService } from './lib/modal/modal-control.service';
import { LoginComponent } from './login';
import { ParentComponent } from './parent';
import { SuperAdminComponent } from './superadmin';
import { AdminComponent } from './admin/';
import { ModalComponent } from './lib/modal/';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'my-secureslice', // <my-app></my-app>
    providers: [SchoolService, ModalControlService],
    directives: [...ROUTER_DIRECTIVES, ...MD_SIDENAV_DIRECTIVES, 
    ...MD_LIST_DIRECTIVES, ...MD_TOOLBAR_DIRECTIVES, ModalComponent],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
@RouteConfig([
    { path: '/login', component: LoginComponent, name: 'Login', useAsDefault: true },
    { path: '/parent/...', component: ParentComponent, name: 'Parent' },
    { path: '/superadmin', component: SuperAdminComponent, name: 'SuperAdmin' },
    { path: '/admin/...', component: AdminComponent, name: 'Admin' },
])
export class AppComponent {
    constructor(private school: SchoolService) {
    }
}
