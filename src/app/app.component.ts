import { Component } from '@angular/core';
import { ModalControlService } from './lib/modal/modal-control.service';
import { LoginService, SchoolService } from './shared';

@Component({
    selector: 'my-secureslice',
    providers: [ModalControlService, SchoolService, LoginService],
    template: './app.component.html',
    styles: ['./app.component.scss'],
})
export class AppComponent {
    constructor() {
        console.log('Hello app component');
    }
}
