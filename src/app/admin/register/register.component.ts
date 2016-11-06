import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    template: require('./register.component.html'),
    styles: [require('./register.component.scss')],

})
export class AdminRegisterComponent implements OnInit {
    token: String;
    constructor(private router: Router) {
        // Do stuff
    }

    ngOnInit() {
        // TODO 
        // this.router
        //     .routerState
        //     .queryParams
        //     .subscribe(params => {
        //         this.token = params['token'];
        //         console.log("Token=" + this.token);
        //     });
    }

}
