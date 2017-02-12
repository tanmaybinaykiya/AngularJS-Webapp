export class Grade {

    constructor(
        public name: string,
        public id: string,
        public daysOfWeek: boolean[], // M T W Th F Sa Su
        public totalFee: number,
        public from: Date,
        public to: Date,
        public minimumAge: number
    ) {
    }
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
