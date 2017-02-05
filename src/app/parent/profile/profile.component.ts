import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { MdIconRegistry } from '@angular2-material/icon';

import { ParentService, BillingService } from '../../service';
import { ModalControlService } from '../../lib/modal/modal-control.service';
import { Modal } from '../../lib/enums/modal-names.enums';
import { PaymentMethodResponse } from '../../models';

@Component({
    selector: 'my-profile',
    viewProviders: [MdIconRegistry],
    template: require('./profile.component.html'),
    styles: [require('./profile.component.scss')],
})
export class ProfileComponent implements OnInit {

    paymentMethods: PaymentMethodResponse[];
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

    constructor(private parentService: ParentService, private modalControlService: ModalControlService,
        private billingService: BillingService, private cookieService: CookieService) {
    }

    ngOnInit() {
        console.log('Profile');
        let loggedInUser: any = this.cookieService.getObject('loggedInUser');
        let parentEmail: string = loggedInUser.email;
        let self = this;

        this.billingService.getAllPaymentMethods(parentEmail)
            .subscribe((paymentMethods: PaymentMethodResponse[]) => {
                self.paymentMethods = paymentMethods;
            }, err => {
                console.log('Error getting paymentMethods');
            });
    }

    toggleModal(modal: Modal) {
        console.log('Profile: toggleModal', modal);
        this.modalControlService.enable(modal);
    }
}
