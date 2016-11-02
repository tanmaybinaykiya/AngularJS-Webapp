export class Institution {

    constructor(public shortCode: string, public customerId: string, public name: string,
        public adminemail: string, public addressline1: string, public city: string,
        public state: string, public zip: number, public country: string) {
    }

}
