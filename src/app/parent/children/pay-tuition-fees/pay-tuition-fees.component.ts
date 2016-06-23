import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { MdSlideToggle } from '@angular2-material/slide-toggle/slide-toggle';
import { ModalControlService } from '../../../lib/modal/modal-control.service.ts';
import { Modal } from '../../../lib/enums/modal-names.enums';

@Component({
    selector: 'pay-tuition-fees',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES, MdSlideToggle],
    providers: [MdIconRegistry],
    template: require('./pay-tuition-fees.component.html'),
    styles: [require('./pay-tuition-fees.component.scss')]
})
export class PayTuitionFeesComponent implements OnInit {
    
    @Input() isAutoPayEnabled: Boolean;
    paymentOptions = ['AMEX X156', 'ACH X156'];

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
