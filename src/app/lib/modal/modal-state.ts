import { Modal } from '../enums/modal-names.enums';

export class ModalState {
    modal: Modal;
    isOpen: Boolean;

    constructor(modal: Modal, isOpen: Boolean) {
        this.modal = modal;
        this.isOpen = isOpen;
    }

}
