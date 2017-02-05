import { MdIconRegistry } from '@angular2-material/icon';
import { CookieService } from 'angular2-cookie/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ModalControlService } from '../../../lib/modal/modal-control.service';
import { BillingService } from '../../../service';
import { PaymentMethod, PaymentMethodResponse } from '../../../models';

@Component({
    selector: 'add-payment-type',
    template: require('./add-payment-type.component.html'),
    styles: [require('./add-payment-type.component.scss')],
    viewProviders: [MdIconRegistry],
    encapsulation: ViewEncapsulation.None,
})

export class AddPaymentTypeComponent implements OnInit {

    paymentMethod: PaymentMethod = new PaymentMethod();
    parentEmail: string;

    constructor(private mdIconRegistry: MdIconRegistry, private modalControlService: ModalControlService, 
        private billingService: BillingService, public cookieService: CookieService) {
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('AddPaymentTypeComponent');
        let loggedInUser: any = this.cookieService.getObject('loggedInUser');
        this.parentEmail = loggedInUser.email;
    }

    submit(){
        let self = this;
        this.billingService.addPaymentMethod(this.parentEmail, this.paymentMethod)
            .subscribe((resp: PaymentMethodResponse) => {
                self.closeView();
            }, err => {
                console.error('Error adding payment method');
            });
    }

}
