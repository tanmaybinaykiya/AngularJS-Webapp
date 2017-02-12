export class Grade {

    public name: string;
    public tuitionFee: number;
    public planId: string;
    public duration: {
        days: string,
        from: Date,
        to: Date
    };
    public minimumAgeCriterion: {
        age: number,
        validationDate: Date
    };
    constructor() { }

}

export class AddGradeRequest {

    constructor(
        private name: string,
        private tuitionFee: number,
        private planId: string,
        private duration: {
            days: string,
            from: Date,
            to: Date
        },
        private minimumAgeCriterion: {
            age: number
            validationDate: Date
        }
    ) { }

}
