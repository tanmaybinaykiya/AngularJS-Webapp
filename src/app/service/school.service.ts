import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { format } from 'util';
import { CookieService } from 'angular2-cookie/core';

import { Grade, Class, Staff, Teacher, Institution, Student, School, AddClassRequest, AddGradeRequest, AddSchoolRequest } from '../models';
import { Subject } from 'rxjs/Subject';
import {
    getApiHost, handleError, getAuthorizationHeader,
    getInstitutionShortCodeFromTokenObject, getAdminSchoolCodeFromTokenObject
} from './serviceHelper';
import { LoginService } from './login.service';

@Injectable()
export class SchoolService {

    private _school = new Subject<Institution>();
    school = this._school.asObservable();

    private getSchoolsByInstitutionCodeUrl: string = '%s/school/institution/%s/school';
    private getSchoolsByInstitutionAndSchoolCodeUrl: string = '%s/school/institution/%s/school/%s';
    private getClassesBySchoolUrl: string = '%s/school/institution/%s/school/%s/class';
    private getGradesBySchoolUrl: string = '%s/school/institution/%s/school/%s/grade';
    private addClassUrl: string = '%s/school/institution/%s/school/%s/grade/%s/class';
    private addGradeUrl: string = '%s/school/institution/%s/school/%s/grade';
    private addSchoolUrl: string = '%s/school/institution/%s/school';
    private getSchoolsUrl: string = '%s/school/institution/%s/school';
    private getTeachersBySchoolUrl: string = '%s/user/institution/%s/school/%s/teacher';
    private getStaffBySchoolUrl: string = '%s/user/institution/%s/school/%s/staff';
    private getAllStaffBySchoolUrl: string = '%s/user/institution/%s/school/%s';
    private getAllStudentsBySchoolUrl: string = '%s/student/institution/%s/school/%s';

    constructor(private http: Http, private loginService: LoginService, private cookieService: CookieService, ) {
        console.log('hello SchoolService', loginService.loggedInUser);
    }

    dummyGetSchool(cb: (result: Institution) => any) {
        setTimeout(function () {
            cb(new Institution('ISS', '123456', 'InstitutionName', 'admin@sslice.com', 'blah', 'blah', 'blah', 12344, 'INDIA'));
        }, 1500);
    }

    dummyGetAllSchools(cb: (result: Institution[]) => any) {
        setTimeout(function () {
            cb([new Institution('ISS1', '1236', 'InstitutionName11', 'admin2@sslice.com', 'blah', 'blah', 'blah', 12344, 'INDIA'),
            new Institution('ISS3', '136', 'InstitutionName32', 'admin@sslice.com', 'blah', 'blah', 'blah', 12344, 'INDIA'),
            new Institution('ISS4', '1246', 'InstitutionName12', 'admin4@sslice.com', 'blah', 'blah', 'blah', 12344, 'INDIA'),
            new Institution('ISS3', '33456', 'InstitutionName12', 'admin8@sslice.com', 'blah', 'blah', 'blah', 12344, 'INDIA')
            ]);
        }, 1500);
    }

    dummyGetAllStudents(cb: (result: Student[]) => any) {
        setTimeout(function () {
            cb([
                new Student(12, 'student61', 'classA'),
                new Student(2, 'student12', 'classB'),
                new Student(1, 'student31', 'classC'),
                new Student(22, 'student11', 'classD'),
            ]);
        }, 1500);
    }

    getSchoolsByInstitutionAndSchoolCode(institutionCode: string, schoolCode: string): Observable<School> {
        console.log('getSchoolsByInstitutionAndSchoolCode called. institutionCode: ', institutionCode, 'schoolCode:', schoolCode);
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getSchoolsByInstitutionAndSchoolCodeUrl, getApiHost(), institutionCode, schoolCode);
        console.log('url: ', url, 'options: ', options);
        return this.http.get(url, options)
            .map((res: Response): School => {
                let school: School;
                school = res.json();
                return school;
            })
            .catch(handleError);
    }

    getSchoolsByInstitutionCode(institutionCode: string): Observable<School[]> {
        console.log('getSchoolsByInstitutionCode called. institutionCode: ', institutionCode);
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getSchoolsByInstitutionCodeUrl, getApiHost(), institutionCode);
        console.log('url: ', url, 'options: ', options);
        return this.http.get(url, options)
            .map((res: Response): School[] => {
                let schools: School[];
                schools = res.json();
                return schools;
            })
            .catch(handleError);

    }

    public getAllSchools(): Observable<School[]> {
        console.log('getSchools called');
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getSchoolsUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService));
        console.log('getSchools called. url:', url);
        return this.http.get(url, options)
            .map((res: Response): School[] => res.json())
            .catch(handleError);
    }

    public getClassesBySchool(): Observable<Class[]> {
        console.log('getAllClassesBySchool called');
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getClassesBySchoolUrl, getApiHost(),
            getInstitutionShortCodeFromTokenObject(self.cookieService), getAdminSchoolCodeFromTokenObject(self.cookieService));
        console.log('url: ', url, 'options: ', options);
        return this.http.get(url, options)
            .map((res: Response): School[] => {
                let schools: School[];
                schools = res.json();
                return schools;
            })
            .catch(handleError);
    }

    public getAllGrades(): Observable<Grade[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getGradesBySchoolUrl, getApiHost(),
            getInstitutionShortCodeFromTokenObject(self.cookieService), getAdminSchoolCodeFromTokenObject(self.cookieService));
        console.log('getAllGrades: URL: ', url, 'Options: ', options);
        return this.http.get(url, options)
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    public getTeachersBySchool(): Observable<Teacher[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getTeachersBySchoolUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getAdminSchoolCodeFromTokenObject(self.cookieService));
        return this.http.get(url, options)
            .map((res: Response) => {
                console.log('Get Teachers');
                return res.json();
            })
            .catch(handleError);
    }

    public getStaffBySchool(): Observable<Teacher[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getStaffBySchoolUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getAdminSchoolCodeFromTokenObject(self.cookieService));
        return this.http.get(url, options)
            .map((res: Response) => {
                console.log('getStaffBySchool', res.json());
                return res.json();
            })
            .catch(handleError);
    }

    public getAllStaffBySchool(): Observable<Staff[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getAllStaffBySchoolUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getAdminSchoolCodeFromTokenObject(self.cookieService));
        return this.http.get(url, options)
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    public getAllStudents(): Observable<Student[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getAllStudentsBySchoolUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getAdminSchoolCodeFromTokenObject(self.cookieService));
        return this.http.get(url, options)
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    public addClass(addClassRequest: AddClassRequest, gradeName: string): Observable<string> {
        let self = this;
        console.log('addClassRequest:', addClassRequest);
        let body = JSON.stringify(addClassRequest);
        console.log('body:', body);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.addClassUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getAdminSchoolCodeFromTokenObject(self.cookieService), gradeName);
        return this.http.post(url, body, options)
            .map((res: Response): string => res.json().studentId)
            .catch(handleError);
    }

    public addGrade(addGradeRequest: AddGradeRequest): Observable<string> {
        let self = this;
        console.log('addGradeRequest:', addGradeRequest);
        let body = JSON.stringify(addGradeRequest);
        console.log('body:', body);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.addGradeUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getAdminSchoolCodeFromTokenObject(self.cookieService));
        return this.http.post(url, body, options)
            .map((res: Response): string => res.json().studentId)
            .catch(handleError);
    }

    public addSchool(request: AddSchoolRequest): Observable<void> {
        let self = this;
        console.log('AddSchoolRequest:', request);
        let body = JSON.stringify(request);
        console.log('body:', body);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.addSchoolUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService));
        return this.http.post(url, body, options)
            .map((res: Response): string => res.json())
            .catch(handleError);
    }

}
