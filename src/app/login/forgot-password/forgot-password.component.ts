import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon/icon';
import { ModalControlService } from '../../lib/modal/modal-control.service';

@Component({
    selector: 'forgot-password',
    providers: [MdIconRegistry],
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    constructor(mdIconRegistry: MdIconRegistry, private modalControlService: ModalControlService) {
    }

    ngOnInit() {
        console.log('ForgotPasswordComponent');
    }

    closeView() {
        this.modalControlService.disable();
    }

}
