import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../models/user';
import { Institution } from '../models/institution';

@Injectable()
export class SchoolService {

    private _school = new Subject<Institution>();
    school = this._school.asObservable();

    private getInstitutionUrl: string = getApiHost() + '/institution/shortcode';

    constructor(private http: Http) {
        console.log('hello SchoolService');
    }

    getSchool(institutionCode: string): Observable<Institution> {
        console.log('getSchool called');
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        let params: URLSearchParams = new URLSearchParams();
        let url = this.getInstitutionUrl;
        params.set('shortCode', institutionCode);
        console.log('url: ', url, 'params: ', params);
        return this.http.get(this.getInstitutionUrl, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let inst = res.json();
        this._school = inst;
        console.log('extractData: ', this._school);
        return this._school || {};
    }

    private handleError(error: any) {
        try {
            let errMsg = JSON.parse(error.json().errorMessage).message;
            console.error(errMsg); // log to console instead
            return Observable.throw(errMsg);
        } catch (err) {
            console.error('Actual error from service ', error);
            console.error('Error while parsing error', err);
            return Observable.throw('Unknown service error');
        }
    }
}


@Injectable()
export class ApiUrlService {
    schoolName = 'Test School';
}

export function getApiHost() {
    switch (window.location.hostname) {
        case 'app-beta.secureslice.com':
            return 'https://api.secureslice.com/beta';
        case 'localhost':
            return 'http://localhost:3000';
        default:
            return 'https://api.secureslice.com/prod';
    }
};

@Injectable()
export class LoginService {

    loginUrl = getApiHost() + '/users/token';
    loggedIn = false;
    loggedInUser: User;

    constructor(private http: Http) {
        console.log('hello login service');
    }

    login(email: String, password: String): Observable<User> {
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
        this.loggedInUser.name = body.firstname;
        console.log('extractData: ', this.loggedInUser);
        return body || {};
    }

    private handleError(error: any) {
        this.loggedIn = false;
        try {
            let errMsg = JSON.parse(error.json().errorMessage).message;
            console.error(errMsg); // log to console instead
            return Observable.throw(errMsg);
        } catch (err) {
            console.error('Actual error from servide ', error);
            console.error('Error while parsing error', err);
            return Observable.throw('Unknown service error');
        }
    }
}

@Injectable()
export class ParentService {
    title = 'Angular 2';
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
export const APP_SERVICES = [
    NotificationService, ParentService, LoginService, ApiUrlService, SchoolService
];
