import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'delete-payment-type',
    template: require('./delete-payment-type.component.html'),
    styles: [require('./delete-payment-type.component.scss')]
})
export class DeletePaymentTypeComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        console.log('DeletePaymentTypeComponent');
    }

}
