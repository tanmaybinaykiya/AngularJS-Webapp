import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'delete-user',
    viewProviders: [MdIconRegistry],
    template: require('./delete-user.component.html'),
    styles: [require('./delete-user.component.scss')]
})
export class DeleteUserComponent implements OnInit {
    modalControlService: ModalControlService;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('DeleteUserComponent');
    }

}
