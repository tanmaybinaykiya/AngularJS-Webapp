import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'reset-password',
    viewProviders: [MdIconRegistry],
    template: require('./reset-password.component.html'),
    styles: [require('./reset-password.component.scss')]
})
export class ResetPasswordComponent implements OnInit {

    modalControlService: ModalControlService;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('ResetPasswordComponent');
    }

}
