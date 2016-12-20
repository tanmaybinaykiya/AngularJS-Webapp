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
