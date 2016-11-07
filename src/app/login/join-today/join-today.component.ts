import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { ModalControlService } from '../../lib/modal/modal-control.service';

@Component({
    selector: 'join-today',
    viewProviders: [MdIconRegistry],
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
