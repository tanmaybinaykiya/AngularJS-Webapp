import { MdIconRegistry } from '@angular2-material/icon';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'add-payment-type',
    template: require('./add-payment-type.component.html'),
    styles: [require('./add-payment-type.component.scss')],
    viewProviders: [MdIconRegistry],
    encapsulation: ViewEncapsulation.None,
})

export class AddPaymentTypeComponent implements OnInit {

    modalControlService: ModalControlService;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('AddPaymentTypeComponent');
    }


}
