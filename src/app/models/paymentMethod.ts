export class PaymentMethod {
    constructor(public cardNumber: string, public cvv: string, public postalCode: string, public expiration: string) { }
}

export class PaymentMethodRequest extends PaymentMethod {
    constructor(paymentMethod:PaymentMethod, public parentEmail: string) {
        super(paymentMethod.cardNumber, paymentMethod.cvv, paymentMethod.postalCode, paymentMethod.expiration);
    }
}

export class PaymentMethodResponse {
    methodId: string;
    cardNumber: string;
}
