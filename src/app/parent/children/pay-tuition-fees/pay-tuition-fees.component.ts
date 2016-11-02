import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pay-tuition-fees',
    template: require('./pay-tuition-fees.component.html'),
    styles: [require('./pay-tuition-fees.component.scss')]
})
export class PayTuitionFeesComponent implements OnInit {

    @Input() isAutoPayEnabled: Boolean;
    paymentOptions: String[] = ['AMEX X156', 'ACH X156'];
    selectedOption: String;

    constructor() {
    }

    ngOnInit() {
        console.log('PayTuitionFeesComponent');
    }

}
