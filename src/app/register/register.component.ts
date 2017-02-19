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

    form: FormGroup;

    adminRegistrationRequest: AdminRegistrationRequest = new AdminRegistrationRequest();
    parentRegistrationRequest: ParentRegistrationRequest = new ParentRegistrationRequest();

    institutionCode: string;
    schoolCode: string;
    isAdmin: boolean;
    token: string;
    role: any;

    errorMessage: string;
    genVerifnCodeErrorMessage: string;
    successMessage: string;

    isRequested: boolean = false;
    isGeneratingVerificationCode: boolean = false;

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
        console.log('role: ', this.role);
        console.log('isAdmin: ', this.isAdmin);
        if (this.institutionCode == null || this.institutionCode === undefined || this.institutionCode === '') {
            console.error('Invalid URL, no institutionCode passed');
        }
        if (this.role === 'parent' && (this.schoolCode == null || this.schoolCode === undefined || this.schoolCode === '')) {
            console.error('Invalid URL, no schoolCode passed');
        }
        if (this.isAdmin) {
            this.adminRegistrationRequest.institutionCode = this.institutionCode;
            console.log('Set iss code: ', this.adminRegistrationRequest.institutionCode);
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

    get isValid() {
        return this.isAdmin ? this.isAdminReqValid : this.isParentReqValid;
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
        let self = this;
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
            }, err => {
                console.error('Error generating verification code', err);
                // switch (key) {
                //     case value:

                //         break;

                //     default:
                //         break;
                // }
                self.isGeneratingVerificationCode = false;
            });
    }

    register() {
        let self = this;
        self.isRequested = true;

        if (this.role === 'admin') {
            this.registerService.registerAdmin(this.adminRegistrationRequest, this.token)
                .subscribe(() => {
                    console.log('Registration successful');
                    self.successMessage = 'Registration successful';
                }, function (error) {
                    self.isRequested = false;
                    console.log('Error: ', error);
                    self.setErrorMessage(error.message);
                });

        } else if (this.role === 'parent') {
            this.registerService.registerParent(this.parentRegistrationRequest, this.token)
                .subscribe(() => {
                    console.log('Registration successful');
                    self.successMessage = 'Registration successful';
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
        // console.log( JSON.stringify(this.adminRegistrationRequest));
        return JSON.stringify(this.isAdmin ? this.adminRegistrationRequest : this.parentRegistrationRequest);
    }

    get reqBody() {
        return this.isAdmin ? this.adminRegistrationRequest : this.parentRegistrationRequest;
    }

}
