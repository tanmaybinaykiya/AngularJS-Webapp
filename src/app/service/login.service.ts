import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { format } from 'util';

import { User } from '../models';
import { getApiHost, handleError } from './serviceHelper';

@Injectable()
export class LoginService {

    loginUrl = '%s/auth/token';
    loggedIn = false;
    loggedInUser: User;
    dummyVar: string = 'defaultValue';

    constructor(private http: Http) {
        console.log('hello login service');
    }

    login(email: String, password: String): Observable<User> {
        let body = JSON.stringify({ email: email, password: password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let self = this;
        return this.http.post(format(this.loginUrl, getApiHost()), body, options)
            .map((res: Response) => {
                self.loggedIn = true;
                self.loggedInUser = res.json();
                console.log('Logged in User : ', self.loggedInUser);
                return self.loggedInUser;
            })
            .catch(handleError);
    }

}
