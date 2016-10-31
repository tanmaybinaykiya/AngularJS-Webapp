/// <reference path="../_all.d.ts" />
'use strict';

import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var Ultima: any;

import { ModalControlService } from './lib/modal/modal-control.service';
import { LoginService, SchoolService } from './shared';

@Component({
    selector: 'my-ss-app',
    providers: [ModalControlService, SchoolService, LoginService],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent implements AfterViewInit {

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }
}
