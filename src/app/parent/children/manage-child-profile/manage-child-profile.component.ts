import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'manage-child-profile',
    viewProviders: [MdIconRegistry],
    template: require('./manage-child-profile.component.html'),
    styles: [require('./manage-child-profile.component.scss')]
})
export class ManageChildProfileComponent implements OnInit {
    modalControlService: ModalControlService;
    @Input() isModalOpen: Boolean;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    ngOnInit() {
        console.log('ManageChildProfileComponent');
    }

    closeView() {
        this.modalControlService.disable();
    }

}
