import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { format } from 'util';

import { AdminRegistrationRequest, ParentRegistrationRequest, GetRegistrationRequest } from '../models';
import { getApiHost, handleError } from './serviceHelper';

@Injectable()
export class RegisterService {

    adminRegistrationUrl = '%s/user/admin/register';
    parentRegistrationUrl = '%s/user/parent/register';
    generateVerificationCodeRequestUrl = '%s/user/contact/generateVerificationCode';

    constructor(private http: Http) {
        console.log('hello login service');
    }

    registerAdmin(request: AdminRegistrationRequest, token: string): Observable<void> {
        let body = request;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(format(this.adminRegistrationUrl, getApiHost()), body, options)
            .catch(handleError);
    }

    registerParent(request: ParentRegistrationRequest, token: string): Observable<void> {
        let body = request;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(format(this.parentRegistrationUrl, getApiHost()), body, options)
            .catch(handleError);
    }

    generateVerificationCode(request: GetRegistrationRequest, token: string) {
        let body = request;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(format(this.generateVerificationCodeRequestUrl, getApiHost()), body, options)
            .map((res: Response) => (res.json().requestId))
            .catch(handleError);
    }
}
