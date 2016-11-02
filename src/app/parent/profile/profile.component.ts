import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../shared';

@Component({
    selector: 'my-profile',
    providers: [ParentService],
    template: require('./profile.component.html'),
    styles: [require('./profile.component.scss')],
})
export class ProfileComponent implements OnInit {

    billingInfo = [
        {
            type: 'ACH',
            accountNumber: 'x9171',
            status: {
                isPrimary: false,
                isExpired: false
            }
        }, {
            type: 'Debit Card',
            accountNumber: 'x6969',
            status: {
                isPrimary: true,
                isExpired: false
            }
        }, {
            type: 'Master Card',
            accountNumber: 'x4321',
            status: {
                isExpired: true
            }
        }
    ];
    profileInfo = [
        {
            name: 'James Potter',
            relationship: 'Father',
            status: {
                isAccepted: true,
                role: 'Full Access'
            }
        }, {
            name: 'Lily Singh',
            relationship: 'Father',
            status: {
                isAccepted: true,
                role: 'Full Access'
            }
        }, {
            name: 'Severus Snape',
            relationship: 'Father',
            status: {
                isAccepted: false
            }
        }
    ];

    constructor(private loginService: ParentService) {
    }

    ngOnInit() {
        console.log('Profile');
    }

}
