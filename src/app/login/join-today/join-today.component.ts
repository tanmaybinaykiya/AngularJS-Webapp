import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon/icon';
import { ModalControlService } from '../../lib/modal/modal-control.service';

@Component({
    selector: 'join-today',
    viewProviders: [MdIconRegistry],
    templateUrl: './join-today.component.html',
    styleUrls: ['./join-today.component.scss']
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
