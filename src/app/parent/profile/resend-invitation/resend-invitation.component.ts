import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'resend-invitation',
    providers: [MdIconRegistry],
    template: require('./resend-invitation.component.html'),
    styles: [require('./resend-invitation.component.scss')]
})
export class ResendInvitationComponent implements OnInit {

    modalControlService: ModalControlService;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('ResendInvitationComponent');
    }

}
