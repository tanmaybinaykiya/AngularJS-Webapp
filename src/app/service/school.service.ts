import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { format } from 'util';
import { CookieService } from 'angular2-cookie/core';

import { Grade, Class, Teacher, Institution, Student, School } from '../models';
import { Subject } from 'rxjs/Subject';
import { getApiHost, handleError, getAuthorizationHeader } from './serviceHelper';
import { LoginService } from './login.service';

@Injectable()
export class SchoolService {

    private _school = new Subject<Institution>();
    school = this._school.asObservable();

    private getSchoolsByInstitutionCodeUrl: string = '%s/school/institution/%s/school';
    private getSchoolsByInstitutionAndSchoolCodeUrl: string = '%s/school/institution/%s/school/%s';

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

    dummyGetAllClasses(cb: (result: Class[]) => any) {
        setTimeout(function () {
            cb([
                new Class('Class17', 'CLS17', 1236, 3500),
                new Class('Class71', 'CLS71', 1236, 1500),
                new Class('Class12', 'CLS12', 1236, 2500),
                new Class('Class21', 'CLS21', 1236, 500),
            ]);
        }, 1500);
    }

    dummyGetAllGrades(cb: (result: Grade[]) => any) {
        setTimeout(function () {
            cb([
                new Grade('Grade17', 'G17', [false, false], 1236, new Date(), new Date(), 12),
                new Grade('Grade71', 'G71', [false, false], 1236, new Date(), new Date(), 12),
                new Grade('Grade12', 'G12', [false, false], 1236, new Date(), new Date(), 12),
                new Grade('Grade21', 'G21', [false, false], 1236, new Date(), new Date(), 12)
            ]);
        }, 1500);
    }

    dummyGetAllTeachers(cb: (result: Teacher[]) => any) {
        setTimeout(function () {
            cb([
                new Teacher(12, 'teacher61'),
                new Teacher(12, 'teacher12'),
                new Teacher(12, 'teacher31'),
                new Teacher(12, 'teacher11'),
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

    public getAllClasses(): Observable<Class[]> {
        console.log('getClasses called');
        let getJSONAsObservable: () => Observable<Class[]> = Observable.bindCallback(this.dummyGetAllClasses);
        return getJSONAsObservable();
    }

    public getAllGrades(): Observable<Grade[]> {
        console.log('getClasses called');
        let getJSONAsObservable: () => Observable<Grade[]> = Observable.bindCallback(this.dummyGetAllGrades);
        return getJSONAsObservable();
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

}
