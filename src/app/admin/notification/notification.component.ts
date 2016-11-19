import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { RecipientService } from '../../shared/api.service';

@Component({
    selector: 'myss-notification',
    template: require('./notification.component.html'),
    styles: [require('./notification.component.scss')],
})
export class NotificationComponent implements OnInit {

    form: FormGroup;
    private filteredRecipients: User[] = [];
    dialogDisplay: boolean = false;

    constructor(private recipientService: RecipientService, fb: FormBuilder) {
        // Do stuff
        this.form = fb.group({
            'cellNumber': ['', Validators.pattern('[0-9]{10}')],
        });
    }

    ngOnInit() {
        console.log('Hello NotificationComponent');
    }

    filterRecipients(event) {
        console.log('Event called: ', event.query);
        let query: string = event.query;
        this.recipientService.getRecipients().debounceTime(400).subscribe((recipients: User[]) => {
            console.log('Filtering... ', recipients);
            this.filteredRecipients = recipients.filter(recipient => recipient.name.toLowerCase().indexOf(query.toLowerCase()) === 0);
        }, (err) => {
            console.log('Error:', err);
        });
    }

    sendTestMessage() {
        console.log('Sending test message:', this.form.controls['cellNumber'].value);
        this.dialogDisplay = false;
    }

}
