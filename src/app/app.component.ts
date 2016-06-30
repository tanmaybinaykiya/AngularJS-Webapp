import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { ModalControlService } from './lib/modal/modal-control.service';
import { LoginComponent } from './login';
import { ParentComponent } from './parent';
import { SuperAdminComponent } from './superadmin';
import { AdminComponent } from './admin/';
import { ModalComponent } from './lib/modal/';
import { LoginService, SchoolService } from './shared';

@Component({
    selector: 'my-secureslice',
    providers: [ModalControlService, SchoolService],
    directives: [...ROUTER_DIRECTIVES, ...MD_SIDENAV_DIRECTIVES, 
        ...MD_LIST_DIRECTIVES, ...MD_TOOLBAR_DIRECTIVES, ModalComponent],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent {

    constructor() { }

}
