import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';

import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'pay-tuition-fees',
    viewProviders: [MdIconRegistry],
    templateUrl: './pay-tuition-fees.component.html',
    styleUrls: ['./pay-tuition-fees.component.scss']
})
export class PayTuitionFeesComponent implements OnInit {

    @Input() isAutoPayEnabled: Boolean;
    paymentOptions: String[] = ['AMEX X156', 'ACH X156'];
    selectedOption: String;

    constructor(private mdIconRegistry: MdIconRegistry,
        private modalControlService: ModalControlService) {
    }

    ngOnInit() {
        console.log('PayTuitionFeesComponent');
    }

    closeView() {
        this.modalControlService.disable();
    }

}
