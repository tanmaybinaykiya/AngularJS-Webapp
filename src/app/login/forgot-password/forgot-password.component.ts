import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../lib/modal/modal-control.service';

@Component({
    selector: 'forgot-password',
    providers: [MdIconRegistry],
    template: require('./forgot-password.component.html'),
    styles: [require('./forgot-password.component.scss')]
})
export class ForgotPasswordComponent implements OnInit {
    constructor(mdIconRegistry: MdIconRegistry, private modalControlService: ModalControlService) {
    }

    ngOnInit() {
        console.log('ForgotPasswordComponent');
    }

    closeView() {
        this.modalControlService.disable();
    }

}
