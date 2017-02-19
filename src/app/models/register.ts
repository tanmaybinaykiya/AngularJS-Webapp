class RegistrationRequest {
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    password: string;
    contact: {
        number: string,
        verification: {
            code: string;
            requestId: string;
        }
    };
    institutionCode: string;
    constructor() {
        this.email = '';
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.password = '';
        this.institutionCode = '';
        this.contact = {
            number: '',
            verification: {
                code: '',
                requestId: ''
            }
        };
    }

}
export class AdminRegistrationRequest extends RegistrationRequest {
    constructor() {
        super();
    }
}

export class ParentRegistrationRequest extends RegistrationRequest {
    schoolCode: string;
    constructor() {
        super();
        this.schoolCode = '';
    }
}

export class GetRegistrationRequest {
    constructor(private email: string, private number: string) {
    }
}
