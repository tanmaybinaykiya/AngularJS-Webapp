export class School {
    name: string;
    code: string;
}

export class AddSchoolRequest extends School {
    constructor() {
        super();
        this.name = '';
        this.code = '';
    }
}
