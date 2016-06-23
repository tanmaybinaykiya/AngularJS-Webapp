import { Injectable }   from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Modal } from '../enums/modal-names.enums';
import { ModalState } from './modal-state';

@Injectable()
export class ModalControlService {
    private isOpenState = new Subject<ModalState>();
    isOpen$ = this.isOpenState.asObservable();

    constructor() {
        this.isOpen$.subscribe(state => {
            console.log('ModalControlService state updated', state);
        });
        console.log(this);
    }

    enable(modal: Modal) {
        console.log('modal opened');
        this.isOpenState.next(new ModalState(modal, true));
        console.log('modal updated', this.isOpenState);
    }

    disable() {
        console.log('modal closed');
        this.isOpenState.next(new ModalState(Modal.None, false));
        console.log('modal updated', this.isOpenState);
    }

}
