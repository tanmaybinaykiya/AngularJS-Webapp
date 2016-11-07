import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'manage-user-profile',
    viewProviders: [MdIconRegistry],
    template: './manage-user-profile.component.html',
    styles: ['./manage-user-profile.component.scss']
})
export class ManageUserProfileComponent implements OnInit {

    modalControlService: ModalControlService;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('ManageUserProfileComponent');
    }

}
