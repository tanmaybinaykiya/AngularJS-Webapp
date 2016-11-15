export type PaymentStatus = 'Past Due' | 'Paid';

export class BillingUser {

    constructor(
        public id: number,
        public name: string,
        public currentPayment: number,
        public paymentStatus: PaymentStatus,
        public discount: number,
        public institution: string) {
    }
}
