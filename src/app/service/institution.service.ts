import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

import { Staff } from '../models';

@Injectable()
export class InstitutionService {

    public getAllStaff(): Observable<Staff[]> {
        console.log('getTeachers called');
        let getJSONAsObservable: () => Observable<Staff[]> = Rx.Observable.bindCallback(this.dummyGetAllStaff);
        return getJSONAsObservable();
    }

    dummyGetAllStaff(cb: (result: Staff[]) => any) {
        setTimeout(function () {
            cb([
                new Staff(12, 'staff61', 'Teacher'),
                new Staff(112, 'staff12', 'Staff'),
                new Staff(132, 'staff31', 'Teacher'),
                new Staff(212, 'staff11', 'Administrator'),
            ]);
        }, 1500);
    }

}