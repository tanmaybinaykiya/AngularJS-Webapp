import { Component, OnInit, Input, Directive } from '@angular/core';

@Component({
    selector: 'add-payment-type',
    template: require('./add-payment-type.component.html'),
    styles: [require('./add-payment-type.component.scss')]
})

export class AddPaymentTypeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log('AddPaymentTypeComponent');
    }

}
