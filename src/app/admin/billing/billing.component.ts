import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BillingUser } from '../../models/billingUser';

@Component({
    selector: 'billing',
    template: require('./billing.component.html'),
    styles: [require('./billing.component.scss')],
})
export class BillingComponent implements OnInit {

    discountForm: FormGroup;
    // people: BillingUser[];
    selection: BillingUser[] = [];
    dialogDisplay: boolean = false;

    constructor(fb: FormBuilder) {
        // Do stuff
        // this.people = [
        //     new BillingUser(123, 'name1', 1000, 'Past Due', 12, 'ISS4'),
        //     new BillingUser(124, 'name3', 1200, 'Past Due', 0, 'ISS1'),
        //     new BillingUser(125, 'name2', 1500, 'Paid', 40, 'ISS3'),
        //     new BillingUser(126, 'name5', 2500, 'Paid', 0, 'ISS2')
        // ];
        this.discountForm = fb.group({
            'discountValue': [0, Validators.pattern('[0-9]{1,2}')],
        });
    }

    ngOnInit() {
        console.log('Hello BillingComponent');
    }

    modify() {
        console.log('Modify: ', this.selection);
    }

    isDiscountFormValid(): boolean {
        return this.discountForm.valid;
    }

    get diagnostic() {
        return JSON.stringify(this.selection.map(person => person.id));
    }

    get discountValue() {
        return this.discountForm.controls['discountValue'].value;
    }

    submit() {
        this.dialogDisplay = false;
        console.log('Submit: ', this.selection, this.discountForm.controls['discountValue'].value);
    }

}
