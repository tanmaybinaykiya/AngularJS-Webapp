import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { ModalControlService } from './lib/modal/modal-control.service';
import { SchoolService, LoginService } from './service';

declare var Ultima: any;

@Component({
    selector: 'my-secureslice',
    providers: [ModalControlService, SchoolService, LoginService],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent implements AfterViewInit {

    constructor(private modalControlService: ModalControlService, private schoolService: SchoolService,
        private loginService: LoginService, private el: ElementRef) {
        console.log('Hello AppComponent');
    }

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }
}
