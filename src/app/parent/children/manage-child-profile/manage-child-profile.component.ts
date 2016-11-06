import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'manage-child-profile',
    viewProviders: [MdIconRegistry],
    templateUrl: './manage-child-profile.component.html',
    styleUrls: ['./manage-child-profile.component.scss']
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
