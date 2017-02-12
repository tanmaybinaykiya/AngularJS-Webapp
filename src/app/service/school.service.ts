import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { format } from 'util';
import { CookieService } from 'angular2-cookie/core';

import { Grade, Class, Teacher, Institution, Student, School, AddClassRequest, AddGradeRequest } from '../models';
import { Subject } from 'rxjs/Subject';
import {
    getApiHost, handleError, getAuthorizationHeader,
    getInstitutionShortCodeFromTokenObject, getSchoolCodeFromTokenObject
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

    dummyGetAllTeachers(cb: (result: Teacher[]) => any) {
        setTimeout(function () {
            cb([
                new Teacher('12', 'teacher61'),
                new Teacher('13', 'teacher12'),
                new Teacher('18', 'teacher31'),
                new Teacher('22', 'teacher11'),
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
        console.log('getSchoolsByInstitutionAndSchoolCode called: ', institutionCode, schoolCode);
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
        console.log('getSchoolsByInstitutionCode called: ', institutionCode);
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

    public getAllSchools(): Observable<Institution[]> {
        console.log('getSchool called');
        let getJSONAsObservable: () => Observable<Institution[]> = Observable.bindCallback(this.dummyGetAllSchools);
        return getJSONAsObservable();
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
            getInstitutionShortCodeFromTokenObject(self.cookieService), getSchoolCodeFromTokenObject(self.cookieService));
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
        console.log('getClasses called');
        console.log('getAllClassesBySchool called');
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.getGradesBySchoolUrl, getApiHost(),
            getInstitutionShortCodeFromTokenObject(self.cookieService), getSchoolCodeFromTokenObject(self.cookieService));
        console.log('url: ', url, 'options: ', options);
        return this.http.get(url, options)
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    public getAllTeachers(): Observable<Teacher[]> {
        console.log('getTeachers called');
        let getJSONAsObservable: () => Observable<Teacher[]> = Observable.bindCallback(this.dummyGetAllTeachers);
        return getJSONAsObservable();
    }

    public getAllStudents(): Observable<Student[]> {
        console.log('getStudents called');
        let getJSONAsObservable: () => Observable<Student[]> = Observable.bindCallback(this.dummyGetAllStudents);
        return getJSONAsObservable();
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
            getSchoolCodeFromTokenObject(self.cookieService), gradeName);
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
            getSchoolCodeFromTokenObject(self.cookieService));
        return this.http.post(url, body, options)
            .map((res: Response): string => res.json().studentId)
            .catch(handleError);
    }

}
