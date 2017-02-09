import { MdIconRegistry } from '@angular2-material/icon';
import { CookieService } from 'angular2-cookie/core';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { ModalControlService } from '../../../lib/modal/modal-control.service';
import { BillingService } from '../../../service';
import { PaymentMethod, PaymentMethodRequest, PaymentMethodResponse, BraintreeTokenResponse } from '../../../models';
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
    errorMessage: string;
    successMessage: string;
    isBusy: boolean = false;

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

    ngOnDestroy() {
        console.log('Destroying AddPaymentTypeComponent');
        delete this.paypalClientInstance;
    }

    submit() {
        let self = this;

        // billing: get auth token
        // paypal: create payment method
        // billing: add Payment Method
        self.isBusy = true;
        self.billingService.getBraintreeToken()
            .subscribe((braintreeTokenResponse: BraintreeTokenResponse) => {
                braintree.client.create({
                    authorization: braintreeTokenResponse.clientToken
                }, (clientErr, clientInstance) => {
                    // Do something with the nonce here
                    console.log('Braintree client created: ', clientErr, clientInstance);
                    if (clientErr) {
                        console.error('Braintree error:', clientErr);
                        self.errorMessage = 'Paypal error!';
                        self.isBusy = false;
                        setTimeout(() => {
                            delete self.errorMessage;
                        }, 3000);
                    } else {
                        self.paypalClientInstance = clientInstance;
                        let data: any = {
                            creditCard: {
                                number: self.paymentMethod.cardNumber,
                                cvv: self.paymentMethod.cvv,
                                expirationDate: self.paymentMethod.expiration,
                                billingAddress: {
                                    postalCode: self.paymentMethod.postalCode
                                },
                                options: {
                                    validate: true
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
                                self.errorMessage = 'Credit card validation failed!';
                                self.isBusy = false;
                                setTimeout(() => {
                                    delete self.errorMessage;
                                }, 3000);

                            } else {
                                let creditCardNonce: string = response.creditCards[0].nonce;
                                console.log('Got nonce:', response.creditCards[0].nonce);
                                self.billingService.addPaymentMethod(new PaymentMethodRequest(self.parentEmail, creditCardNonce,
                                    ' dummy', 'dummy'))
                                    .subscribe((resp: PaymentMethodResponse) => {
                                        console.log('Successfully added payment method', resp);
                                        self.successMessage = 'Successfully added payment method!';
                                        self.isBusy = false;
                                        setTimeout(() => {
                                            delete self.errorMessage;
                                            self.closeView();
                                        }, 1000);

                                    }, err => {
                                        console.error('Error adding payment method');
                                        self.errorMessage = 'Internal Server Error!';
                                        self.isBusy = false;
                                        setTimeout(() => {
                                            delete self.errorMessage;
                                        }, 3000);
                                    });
                            }
                        });
                    }
                });
            }, err => {
                switch (err) {
                    case 'NoBraintreeCredentialsFound':
                        self.errorMessage = 'No braintree credentials configured. Please contact the school administrator';
                        break;
                    default:
                        console.log('Error Occured: ', err);
                        self.isBusy = false;
                        self.errorMessage = 'Internal Server Error!';
                        setTimeout(() => {
                            delete self.errorMessage;
                        }, 3000);
                        break;
                }
            });
    }

}
