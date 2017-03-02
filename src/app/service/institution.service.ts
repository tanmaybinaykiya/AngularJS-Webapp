import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { format } from 'util';

import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

import { Staff, Institution } from '../models';
import { getApiHost, handleError, getAuthorizationHeader } from './serviceHelper';

@Injectable()
export class InstitutionService {

    private readonly getInstitutionByCodeUrl: string = '%s/institution/%s';

    constructor(private http: Http, private cookieService: CookieService) { }

    // public getAllStaff(): Observable<Staff[]> {
    //     console.log('getTeachers called');
    //     let getJSONAsObservable: () => Observable<Staff[]> = Rx.Observable.bindCallback(this.dummyGetAllStaff);
    //     return getJSONAsObservable();
    // }

    getInstitutionByCode(institutionCode: string): Observable<Institution> {
        console.log('getInstitutionByCode called: ', );
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getInstitutionByCodeUrl, getApiHost(), institutionCode);
        console.log('url: ', url, 'options: ', options);
        return this.http.get(url, options)
            .map((res: Response) => {
                let institution: Institution = res.json();
                return institution;
            })
            .catch(handleError);
    }

}
