import { Component, OnInit } from '@angular/core';
import { BraintreeCredentials } from '../../../models';
import { BillingService } from '../../../service';

@Component({
    selector: 'general',
    template: require('./general.component.html'),
    // styles: [require('./administration.component.scss')],

})
export class GeneralComponent implements OnInit {

    credentials: BraintreeCredentials = new BraintreeCredentials();
    isBusy: boolean = false;
    constructor(private billingService: BillingService) {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello GeneralComponent');
    }

    submit() {
        this.isBusy = true;
        let self = this;
        this.billingService.updateBraintreeCredentials(self.credentials)
            .subscribe(() => {
                console.log('Successfully updated credentials');
            }, err => {
                console.error('Error occurred: ', err);
            });

    }

}
