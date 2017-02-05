export class PaymentMethod {
    public cardNumber: string;
    public cvv: string;
    public postalCode: string;
    public expiration: string;
    constructor() { }
}

export class PaymentMethodRequest extends PaymentMethod {
    constructor(paymentMethod: PaymentMethod, public parentEmail: string) {
        super();
        this.cardNumber = paymentMethod.cardNumber;
        this.cvv = paymentMethod.cvv;
        this.postalCode = paymentMethod.postalCode;
        this.expiration = paymentMethod.expiration;
    }
}

export class PaymentMethodResponse {
    methodId: string;
    cardNumber: string;
    isDefault: boolean;
}
