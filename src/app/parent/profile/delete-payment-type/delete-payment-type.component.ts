import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { ModalControlService } from '../../../lib/modal/modal-control.service.ts';

@Component({
    selector: 'delete-payment-type',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES],
    providers: [MdIconRegistry],
    template: require('./delete-payment-type.component.html'),
    styles: [require('./delete-payment-type.component.scss')]
})
export class DeletePaymentTypeComponent implements OnInit {
    modalControlService: ModalControlService;
    
    constructor(mdIconRegistry: MdIconRegistry,  modalControlService:ModalControlService) {
        this.modalControlService=modalControlService;
    }
    
    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('DeletePaymentTypeComponent');
    }

}
