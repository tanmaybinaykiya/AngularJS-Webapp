import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'invite-friends',
    viewProviders: [MdIconRegistry],
    templateUrl: './invite-friends.component.html',
    styleUrls: ['./invite-friends.component.scss']
})
export class InviteFriendsComponent implements OnInit {

    modalControlService: ModalControlService;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('InviteFriendsComponent');
    }

}
