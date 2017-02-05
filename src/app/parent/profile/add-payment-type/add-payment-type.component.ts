import { MdIconRegistry } from '@angular2-material/icon';
import { CookieService } from 'angular2-cookie/core';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { ModalControlService } from '../../../lib/modal/modal-control.service';
import { BillingService } from '../../../service';
import { PaymentMethod, PaymentMethodResponse } from '../../../models';
const braintree = require('braintree-web');

@Component({
    selector: 'add-payment-type',
    template: require('./add-payment-type.component.html'),
    styles: [require('./add-payment-type.component.scss')],
    viewProviders: [MdIconRegistry],
    encapsulation: ViewEncapsulation.None,
})

export class AddPaymentTypeComponent implements OnInit, OnDestroy {

    paymentMethod: PaymentMethod = new PaymentMethod();
    parentEmail: string;
    paypalClientInstance: any;

    constructor(private mdIconRegistry: MdIconRegistry, private modalControlService: ModalControlService,
        private billingService: BillingService, public cookieService: CookieService) {
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('AddPaymentTypeComponent');
        let self = this;
        let loggedInUser: any = this.cookieService.getObject('loggedInUser');
        this.parentEmail = loggedInUser.email;
        let authorization = 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI3MmJlNDNhOTY5ZjEwMmU2M2Q4NTAyMjNiOGVhMWI3OTM4NzU5NDg2Y2ExN2E4NGE2YWVkM2I2ZDRkMGFkZDY2fGNyZWF0ZWRfYXQ9MjAxNy0wMi0wNVQyMDoyMTowMy4xOTg1MDM3NTQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0=';
        braintree.client.create({
            authorization: authorization
        }, (clientErr, clientInstance) => {
            // Do something with the nonce here
            console.log('something happened: ', clientErr, clientInstance);
            if (clientErr) {
                console.error('Braintree error:', clientErr);
            } else {
                self.paypalClientInstance = clientInstance;
                let data = {
                    creditCard: {
                        number: '4111111111101111',
                        cvv: '123',
                        expirationDate: '01/12',
                        billingAddress: {
                            postalCode: 1234567
                        },
                        options: {
                            validate: false
                        }
                    }
                };

                // Warning: For a merchant to be eligible for the easiest level of PCI compliance (SAQ A),
                // payment fields cannot be hosted on your checkout page.
                // For an alternative to the following, use Hosted Fields.
                clientInstance.request({
                    endpoint: 'payment_methods/credit_cards',
                    method: 'post',
                    data: data
                }, function (requestErr, response) {
                    // More detailed example of handling API errors: https://codepen.io/braintree/pen/MbwjdM
                    if (requestErr) {
                        console.error('Error in getting nonce: ', requestErr); 
                    } else {
                        console.log('Got nonce:', response.creditCards[0].nonce);
                    }
                });
            }
        }
        );
    }

    ngOnDestroy() {
        console.log('Destroying AddPaymentTypeComponent');
        delete this.paypalClientInstance;
    }

    submit() {
        let self = this;

        // this.billingService.addPaymentMethod(this.parentEmail, this.paymentMethod)
        //     .subscribe((resp: PaymentMethodResponse) => {
        //         self.closeView();
        //     }, err => {
        //         console.error('Error adding payment method');
        //     });
    }

}
