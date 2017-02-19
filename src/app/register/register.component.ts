import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { AdminRegistrationRequest, ParentRegistrationRequest, GetRegistrationRequest } from '../models';
import { RegisterService } from '../service';

@Component({
    selector: 'my-register-app',
    template: require('./register.component.html'),
    styles: [require('./register.component.scss')],
})
export class RegisterComponent implements OnInit {

    adminRegistrationRequest: AdminRegistrationRequest = new AdminRegistrationRequest();
    parentRegistrationRequest: ParentRegistrationRequest = new ParentRegistrationRequest();
    institutionCode: string;
    schoolCode: string;
    token: string;
    errorMessage: string;
    isRequested: boolean = false;
    isGeneratingVerificationCode: boolean = false;
    genVerifnCodeErrorMessage: string;
    role: any;
    isAdmin: boolean;
    form: FormGroup;

    constructor(private route: ActivatedRoute, private registerService: RegisterService, private router: Router, fbld: FormBuilder, ) {
        console.log('Hello RegisterComponent: ');
        this.form = fbld.group({});
    }

    ngOnInit() {
        this.route.params.subscribe((param: Params) => {
            this.role = param['role'];
        });

        this.route.queryParams.subscribe((param: Params) => {
            this.institutionCode = param['institutionCode'];
            this.schoolCode = param['schoolCode'];
            this.token = param['token'];
        });
        this.isAdmin = this.role === 'admin';
        if (this.institutionCode == null || this.institutionCode === undefined || this.institutionCode === '') {

            console.error('Invalid URL, no institutionCode passed');
        }
        if (this.role === 'parent' && (this.schoolCode == null || this.schoolCode === undefined || this.schoolCode === '')) {
            console.error('Invalid URL, no schoolCode passed');
        }
        if (this.isAdmin) {
            this.adminRegistrationRequest.institutionCode = this.institutionCode;
        } else {
            this.parentRegistrationRequest.institutionCode = this.institutionCode;
            this.parentRegistrationRequest.schoolCode = this.schoolCode;
        }
    }

    get isAdminReqValid(): boolean {
        return !(
            (this.adminRegistrationRequest.email == null || this.adminRegistrationRequest.email === '') ||
            (this.adminRegistrationRequest.firstName == null || this.adminRegistrationRequest.firstName === '') ||
            (this.adminRegistrationRequest.lastName == null || this.adminRegistrationRequest.lastName === '') ||
            (this.adminRegistrationRequest.password == null || this.adminRegistrationRequest.password === '') ||
            (this.adminRegistrationRequest.institutionCode == null || this.adminRegistrationRequest.institutionCode === '') ||
            (this.adminRegistrationRequest.contact == null ||
                (this.adminRegistrationRequest.contact.number == null || this.adminRegistrationRequest.contact.number === '') ||
                (this.adminRegistrationRequest.contact.verification == null ||
                    // tslint:disable-next-line:max-line-length
                    (this.adminRegistrationRequest.contact.verification.code == null || this.adminRegistrationRequest.contact.verification.code === '') ||
                    (this.adminRegistrationRequest.contact.verification.requestId == null || this.adminRegistrationRequest.contact.verification.requestId === '')
                )
            )
        );
    }

    get isParentReqValid(): boolean {
        return !(
            (this.parentRegistrationRequest.email == null || this.parentRegistrationRequest.email === '') ||
            (this.parentRegistrationRequest.firstName == null || this.parentRegistrationRequest.firstName === '') ||
            (this.parentRegistrationRequest.lastName == null || this.parentRegistrationRequest.lastName === '') ||
            (this.parentRegistrationRequest.password == null || this.parentRegistrationRequest.password === '') ||
            (this.parentRegistrationRequest.institutionCode == null || this.parentRegistrationRequest.institutionCode === '') ||
            (this.parentRegistrationRequest.schoolCode == null || this.parentRegistrationRequest.schoolCode === '') ||
            (this.parentRegistrationRequest.contact == null ||
                (this.parentRegistrationRequest.contact.number == null || this.parentRegistrationRequest.contact.number === '') ||
                (this.parentRegistrationRequest.contact.verification == null ||
                    // tslint:disable-next-line:max-line-length
                    (this.parentRegistrationRequest.contact.verification.code == null || this.parentRegistrationRequest.contact.verification.code === '') ||
                    (this.parentRegistrationRequest.contact.verification.requestId == null || this.parentRegistrationRequest.contact.verification.requestId === '')
                )
            )
        );
    }

    // get diagnostic() { return JSON.stringify({ email: this.email, password: this.password }); }

    setErrorMessage(message: string) {
        let self = this;
        self.errorMessage = message;
        setTimeout(function () {
            self.errorMessage = null;
        }, 2500);
    }

    generateVerificationCode() {
        this.isGeneratingVerificationCode = true;
        let email: string = this.isAdmin ? this.adminRegistrationRequest.email : this.parentRegistrationRequest.email;
        // tslint:disable-next-line:max-line-length
        let contactNumber: string = this.isAdmin ? this.adminRegistrationRequest.contact.number : this.parentRegistrationRequest.contact.number;
        let request: GetRegistrationRequest = new GetRegistrationRequest(email, contactNumber);
        this.registerService.generateVerificationCode(request, this.token)
            .subscribe((requestId: string) => {
                this.isGeneratingVerificationCode = false;
                if (this.isAdmin) {
                    this.adminRegistrationRequest.contact.verification.requestId = requestId;
                } else {
                    this.parentRegistrationRequest.contact.verification.requestId = requestId;
                }
            });
    }

    register() {
        let self = this;
        self.isRequested = true;

        if (this.role === 'admin') {
            this.registerService.registerAdmin(this.adminRegistrationRequest, this.token)
                .subscribe(() => {
                    console.log('Registration successful');
                }, function (error) {
                    self.isRequested = false;
                    console.log('Error: ', error);
                    self.setErrorMessage(error.message);
                });

        } else if (this.role === 'parent') {
            this.registerService.registerParent(this.parentRegistrationRequest, this.token)
                .subscribe(() => {
                    console.log('Registration successful');
                }, function (error) {
                    self.isRequested = false;
                    console.log('Error: ', error);
                    self.setErrorMessage(error.message);
                });
        } else {
            this.setErrorMessage('Invalid role in URL');
        }
    }

    get diagnostic() {
        return JSON.stringify(this.isAdmin ? this.adminRegistrationRequest : this.parentRegistrationRequest);
    }

}
