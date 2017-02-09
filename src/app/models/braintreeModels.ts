
export class BraintreeCredentials {

    public merchantId: string;
    public publicKey: string;
    public privateKey: string;

}

export class BraintreeTokenResponse {
    constructor(public clientToken: string) { }
}
