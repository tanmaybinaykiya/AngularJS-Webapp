import { Component } from '@angular/core';
import { ModalControlService } from './lib/modal/modal-control.service';
import { LoginService, SchoolService } from './shared';

@Component({
    selector: 'my-secureslice',
    providers: [ModalControlService, SchoolService, LoginService],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent {
    constructor(private modalControlService: ModalControlService, private schoolService: SchoolService,
        private loginService: LoginService) {
        console.log('Hello AppComponent');
    }
}
