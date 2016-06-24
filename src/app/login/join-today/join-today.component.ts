import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { ModalControlService } from '../../lib/modal/modal-control.service.ts';

@Component({
    selector: 'join-today',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES],
    providers: [MdIconRegistry],
    template: require('./join-today.component.html'),
    styles: [require('./join-today.component.scss')]
})
export class JoinTodayComponent implements OnInit {
    
    constructor(mdIconRegistry: MdIconRegistry, private modalControlService: ModalControlService) {
          console.log('JoinTodayComponent');
    }

    ngOnInit() {
    }

    closeView() {
        this.modalControlService.disable();
    }

}
