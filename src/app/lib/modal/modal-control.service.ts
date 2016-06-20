import { Injectable }   from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

@Injectable()
export class ModalControlService {
    private isOpenState: Boolean = false;
    // private state = this.isOpenState.asObservable(); 

    constructor() { }
    
    someFunct (){
        // return this.state;
    }

    enable() {
        console.log('modal opened');
        this.isOpenState = true;
        console.log('modal updated', this.isOpenState);
    }

    disable() {
        console.log('modal closed');
        this.isOpenState = false;
    }

    isOpen() {
        console.log('modal asked', this.isOpenState);
        return this.isOpenState;
    }

}
