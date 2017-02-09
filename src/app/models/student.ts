export class Student {
    public institutionShortCode: string;
    public schoolCode: string;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;
    public gender: string;
    public medicalForm: string;
    public tuitionForm: string;
    public documents: {
        medicalForm: string,
        tuitionForm: string
    };

    constructor(public id: number, public name: string, public className: string) {
    }
}

export class EnrollableStudent {

    public institutionShortCode: string;
    public schoolCode: string;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;
    public middleName: string;
    // public nickName: string;
    public cityOfBirth: string;
    public stateOfBirth: string;
    public countryOfBirth: string;
    public race: string;
    public gender: string;
    public extraInfo: string;
    public parentEmail: string;
    public documents: {
        medicalForm: string,
        tuitionForm: string
    };
    public paymentMethodId: string;

    constructor() {
        this.race = 'Asian';
        this.gender = 'Male';
        this.documents = {
            medicalForm: 'blah',
            tuitionForm: 'blah',
        };
    }
}

export class EnrolledStudent {

    public studentId: string;
    public parentEmail: string;
    public institutionShortCode: string;
    public schoolCode: string;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;
    public middleName: string;
    public nickName: string;
    public cityOfBirth: string;
    public stateOfBirth: string;
    public countryOfBirth: string;
    public zip: number;
    public race: string;
    public gender: string;
    public extraInfo: string;
    public documents: {
        medicalForm: string,
        tuitionForm: string
    }
    public enrollmentInfo: {
        state: EnrollmentState,
        pastClassesEnrolled: string[]
        classEnrolled: string,
    };
}

type EnrollmentState = 'PENDING_REVIEW' | 'WAITLIST' | 'IN_PROCESS' | 'REGISTERED';
