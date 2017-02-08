export class PaymentMethod {
    public cardNumber: string;
    public cvv: string;
    public postalCode: string;
    public expiration: string;
    constructor() { }
}

export class PaymentMethodRequest {
    constructor(public parentEmail: string, public nonce: string, public firstName: string, public lastName: string) {}
}

export class PaymentMethodResponse {
    methodId: string;
    cardNumber: string;
    isDefault: boolean;
}
