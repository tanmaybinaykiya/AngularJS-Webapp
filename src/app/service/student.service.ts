import { format } from 'util';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

import { Observable } from 'rxjs/Observable';

import { EnrollableStudent, EnrolledStudent, EnrollmentState, UpdateStudentStateRequest, UpdateStudentClassRequest } from '../models';
import {
    getApiHost, getAuthorizationHeader, getInstitutionShortCodeFromTokenObject, getSchoolCodeFromTokenObject,
    getUserEmailFromTokenObject, handleError
} from './serviceHelper';

@Injectable()
export class StudentService {

    private enrollStudentUrl = '%s/student/institution/%s/school/%s/';
    private updateStudentStateUrl = '%s/student/institution/%s/school/%s/student/status';
    private assignStudentClassUrl = '%s/student/institution/%s/school/%s/student/assign';
    private getEnrolledStudentsUrl = '%s/student/institution/%s/school/%s/';

    constructor(private http: Http, private cookieService: CookieService) { }

    enrollStudent(enrollableStudent: EnrollableStudent): Observable<string> {
        let self = this;
        console.log('enrollableStudent:', enrollableStudent);
        let body = JSON.stringify(enrollableStudent);
        console.log('body:', body);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.enrollStudentUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService));
        return this.http.post(url, body, options)
            .map((res: Response): string => res.json().studentId)
            .catch(handleError);
    }

    getEnrolledStudentsForParent(): Observable<EnrolledStudent[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let params: URLSearchParams = new URLSearchParams();
        params.set('parentEmail', getUserEmailFromTokenObject(self.cookieService));
        let options = new RequestOptions({ headers: headers, search: params });
        return this.http.get(format(self.getEnrolledStudentsUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService)), options)
            .map((res: Response): EnrolledStudent[] => res.json())
            .catch(handleError);
    }

    getEnrolledStudentsForAdmin(): Observable<EnrolledStudent[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        console.log('getEnrolledStudentsForAdmin: ', self.getEnrolledStudentsUrl);
        return this.http.get(format(self.getEnrolledStudentsUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService)), options)
            .map((res: Response): EnrolledStudent => res.json())
            .catch(handleError);
    }

    updateStudentStatus(studentIds: string[], state: EnrollmentState) {
        let self = this;
        console.log('updateStudentState:', studentIds, state);
        let body = new UpdateStudentStateRequest(state, studentIds);
        console.log('body:', body);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.updateStudentStateUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService));
        return this.http.post(url, body, options)
            // .map((res: Response): string => res.json().studentId)
            .catch(handleError);
    }

    assignStudentClass(studentIds: string[], className: string) {
        let self = this;
        console.log('updateStudentState:', studentIds, className);
        let body = new UpdateStudentClassRequest(className, studentIds);
        console.log('body:', body);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.assignStudentClassUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService));
        return this.http.post(url, body, options)
            // .map((res: Response): string => res.json().studentId)
            .catch(handleError);
    }

}
