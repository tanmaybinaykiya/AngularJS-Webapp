import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon/icon';

import { ParentService } from '../../shared';
import { ModalControlService } from '../../lib/modal/modal-control.service';
import { Modal } from '../../lib/enums/modal-names.enums';

@Component({
    selector: 'my-profile',
    viewProviders: [MdIconRegistry],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    modalControlService: ModalControlService;

    billingInfo = [
        {
            type: 'ACH',
            accountNumber: 'x9171',
            status: {
                isPrimary: false,
                isExpired: false
            }
        }, {
            type: 'Debit Card',
            accountNumber: 'x6969',
            status: {
                isPrimary: true,
                isExpired: false
            }
        }, {
            type: 'Master Card',
            accountNumber: 'x4321',
            status: {
                isExpired: true
            }
        }
    ];
    profileInfo = [
        {
            name: 'James Potter',
            relationship: 'Father',
            status: {
                isAccepted: true,
                role: 'Full Access'
            }
        }, {
            name: 'Lily Singh',
            relationship: 'Father',
            status: {
                isAccepted: true,
                role: 'Full Access'
            }
        }, {
            name: 'Severus Snape',
            relationship: 'Father',
            status: {
                isAccepted: false
            }
        }
    ];

    constructor(private loginService: ParentService, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    ngOnInit() {
        console.log('Profile');
    }

    toggleModal(modal: Modal) {
        console.log('Profile: toggleModal', modal);
        this.modalControlService.enable(modal);
    }
}
