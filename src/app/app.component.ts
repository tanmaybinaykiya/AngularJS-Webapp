/// <reference path="../_all.d.ts" />
'use strict';

import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var Ultima: any;

// import { LoginService, SchoolService } from './shared';

@Component({
    selector: 'my-ss-app',
    // providers: [ SchoolService, LoginService],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent implements AfterViewInit {

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }
}
