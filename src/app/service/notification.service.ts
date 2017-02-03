import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

import { User } from '../models';

@Injectable()
export class RecipientService {

    getRecipients(): Observable<User[]> {
        console.log('RecipientService called ');
        let getJSONAsObservable: () => Observable<User[]> = Rx.Observable.bindCallback(this.dummyServiceResponse);
        return getJSONAsObservable();
    }

    dummyServiceResponse(cb: (results: User[]) => any) {
        console.log('dummyServiceResponse ');
        setTimeout(function () {
            console.log('Returning now: ');
            cb([
                new User(123, 'name11', 'staff', 'tgrdchfgvjbn', 'ISS3'),
                new User(12, 'name2', 'staff', 'tgrdchfgvjbn', 'ISS2'),
                new User(1234, 'name13', 'staff', 'tgrdchfgvjbn', 'ISS4'),
                new User(23, 'name4', 'staff', 'tgrdchfgvjbn', 'ISS2'),
                new User(31, 'name51', 'staff', 'tgrdchfgvjbn', 'ISS1'),
            ]);
        }, 1500);
    }

}

@Injectable()
export class NotificationService {
    notifications = [
        {
            title: 'Message Title',
            message: 'Lorem ipsum doler sit amet',
            timestamp: 1234567
        }
    ];
}
