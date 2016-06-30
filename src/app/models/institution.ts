export class Institution {

    shortCode: string;
    customerId: string;
    name: string;
    adminemail: string;
    addressline1: string;
    city: string;
    state: string;
    zip: number;
    country: string;

    constructor(shortCode: string, customerId: string, name: string,
        adminemail: string, addressline1: string, city: string,
        state: string, zip: number, country: string) {
        this.shortCode = shortCode;
        this.customerId = customerId;
        this.name = name;
        this.adminemail = adminemail;
        this.addressline1 = addressline1;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
}