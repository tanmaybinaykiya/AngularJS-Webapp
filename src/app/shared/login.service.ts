import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _throw from 'rxjs/observable/throw';

import { User } from '../models';
import { getApiHost } from './api.service';

@Injectable()
export class LoginService {

    loginUrl = getApiHost() + '/auth/token';
    loggedIn = false;
    loggedInUser: User;
    dummyVar: string = 'defaultValue';

    constructor(private http: Http) {
        console.log('hello login service');
    }

    dummyServiceResponse(cb: (result: User) => any) {
        setTimeout(function () {
            cb(new User(1, 'tanmay', 'admin', 'blah', 'ISS'));
        }, 1500);
    }

    login(email: String, password: String): Observable<User> {
        // let getJSONAsObservable: () => Observable<User> = Rx.Observable.bindCallback(this.dummyServiceResponse);
        // return getJSONAsObservable();
        let body = JSON.stringify({ email: email, password: password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: Response) {
        this.loggedIn = true;
        let body = res.json();
        this.loggedInUser = body;
        console.log('extractData: ', this.loggedInUser);
        return body || {};
    }

    private handleError(error: any) {
        this.loggedIn = false;
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