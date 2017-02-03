import { format } from 'util';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

import { Observable } from 'rxjs/Observable';
import * as _throw from 'rxjs/observable/throw';

import { EnrollableStudent } from '../models';
import { getApiHost, getAuthorizationHeader, getInstitutionShortCodeFromTokenObject, getSchoolCodeFromTokenObject } from './api.service';

@Injectable()
export class StudentService {

    private enrollStudentUrl = '%s/student/institution/%s/school/%s/';

    constructor(private http: Http, private cookieService: CookieService) {
        console.log('hello login service: ', cookieService);
    }

    enrollStudent(enrollableStudent: EnrollableStudent): Observable<string> {
        // let getJSONAsObservable: () => Observable<User> = Rx.Observable.bindCallback(this.dummyServiceResponse);
        // return getJSONAsObservable();
        let self = this;
        let body = JSON.stringify(enrollableStudent);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(format(this.enrollStudentUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService)), body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        let studentId = body.studentId;
        console.log('extractData: ', body);
        return studentId;
    }

    private handleError(error: any) {
        try {
            console.error('LALALA:', error.statusText); // log to console instead
            return _throw._throw(error.statusText);
        } catch (err) {
            console.error('LALALA1:', 'Actual error from server: ', error);
            console.error('LALALA2:', 'Error while parsing error: ', err);
            return _throw._throw('Unknown service error');
        }
    }
}