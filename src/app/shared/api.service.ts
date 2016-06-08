import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { User } from '../models/user';
@Injectable()
export class SchoolService {
    schoolName = 'Test School';
}

@Injectable()
export class LoginService {
    loginUrl = 'api/token';
    loggedIn = false;
    loggedInUser: User;
    constructor(private http: Http) {
        this.loggedInUser = {
            name: 'Tanmay',
            id: 3456,
            token: 'token'
        };
    }
    login(): Observable<User> {
        this.loggedIn = true;
        return this.http.get(this.loginUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        this.loggedIn = true;
        let body = res.json();
        this.loggedInUser = body;
        return body || {};
    }
    private handleError(error: any) {
        this.loggedIn = false;
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
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
