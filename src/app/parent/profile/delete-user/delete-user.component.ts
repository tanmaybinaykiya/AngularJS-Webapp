import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'delete-user',
    viewProviders: [MdIconRegistry],
    templateUrl: './delete-user.component.html',
    styleUrls: ['./delete-user.component.scss']
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
