import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { format } from 'util';

import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

import { Staff, Institution } from '../models';
import { getApiHost, handleError } from './serviceHelper';

@Injectable()
export class InstitutionService {

    private readonly getInstitutionUrl: string = '%s/institution/%s';

    constructor(private http: Http) { }

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

    getInstitutionByCode(institutionCode: string): Observable<Institution> {
        console.log('getInstitutionByCode called: ', institutionCode);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let params: URLSearchParams = new URLSearchParams();
        params.set('shortCode', institutionCode);
        let options = new RequestOptions({ headers: headers, search: params });
        let url = this.getInstitutionUrl;
        let self = this;
        console.log('url: ', url, 'params: ', params);
        return this.http.get(format(self.getInstitutionUrl, getApiHost(), institutionCode), options)
            .map((res: Response) => {
                let institution: Institution = res.json();
                return institution;
            })
            .catch(handleError);
    }

}
