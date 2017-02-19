import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { format } from 'util';
import { InviteParentRequest } from '../models';

import { Observable } from 'rxjs/Observable';

import {
    getApiHost, handleError, getAuthorizationHeader, getInstitutionShortCodeFromTokenObject,
    getAdminSchoolCodeFromTokenObject, getCurrentUser
} from './serviceHelper';


@Injectable()
export class ParentService {
    title = 'Angular 2';

    private inviteParentUrl = '%s/user/institution/%s/school/%s/parent/invite';

    constructor(private http: Http, private cookieService: CookieService) { }

    inviteParent(request: InviteParentRequest): Observable<void> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let body = request;
        let options = new RequestOptions({ headers: headers });
        // tslint:disable-next-line:max-line-length
        let url = format(self.inviteParentUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService), getAdminSchoolCodeFromTokenObject(self.cookieService));
        console.log('Url:', url);
        console.log('User:', getCurrentUser(self.cookieService));
        return this.http.post(url, body, options)
            .map((res: Response) => res.json())
            .catch(handleError);
    }

}