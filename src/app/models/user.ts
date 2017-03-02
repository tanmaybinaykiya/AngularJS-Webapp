import { School } from './school';

export type Role = 'admin' | 'staff' | 'parent' | 'teacher' | 'SECS';

export class User {
    id: number;
    name: string;
    role: Role;
    token: string;
    institutionShortCode: string;
    schools: {
        isSelectedIndex: number,
        availableSchools: School[]
    };
    constructor(id: number, name: string, role: Role, token: string, institutionShortCode: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.token = token;
        this.institutionShortCode = institutionShortCode;
    }
}

export class InviteParentRequest {
    email: string[];
    constructor() {
        this.email = [];
    }
}

export class Staff {
    firstName: string;
    lastName: string;
    role: Role;
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.role = 'staff';
    }

    get name() {
        return this.firstName + ' ' + this.lastName;
    }
}

export class Teacher extends Staff {
    teacherId: string;
    constructor() {
        super();
        this.role = 'teacher';
        this.teacherId = '';
    }
}
