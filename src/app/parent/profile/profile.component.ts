import { Component, OnInit } from '@angular/core';
import { MdSlideToggle } from '@angular2-material/slide-toggle/slide-toggle';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';

import { MDL } from '../../lib/mdl/MaterialDesignLiteUpgradeElement';

import { ParentService } from '../../shared';
import { ModalControlService } from '../../lib/modal/modal-control.service';
import { Modal } from '../../lib/enums/modal-names.enums';

@Component({
    selector: 'my-profile',
    providers: [ParentService, MdIconRegistry],
    template: require('./profile.component.html'),
    styles: [require('./profile.component.scss')],
    directives: [MdSlideToggle, MdButton, MdAnchor, MdIcon, MDL ]
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
            this.modalControlService=modalControlService;
    }

    ngOnInit() {
        console.log('Profile');
    }

    toggleModal(modal:Modal){
        console.log('Profile: toggleModal', modal);
        this.modalControlService.enable(modal);
    }
}
