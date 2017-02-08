import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { format } from 'util';
import { PaymentMethodRequest, PaymentMethodResponse, PaymentMethod, BraintreeTokenResponse } from '../models';

import { Observable } from 'rxjs/Observable';

import {
    getApiHost, handleError, getAuthorizationHeader, getInstitutionShortCodeFromTokenObject,
    getSchoolCodeFromTokenObject
} from './serviceHelper';

@Injectable()
export class BillingService {

    private readonly addPaymentMethodUrl: string = '%s/billing/institution/%s/school/%s/paymentMethod';
    private readonly getPaymentMethodUrl: string = '%s/billing/paymentMethod';
    private readonly getBraintreeTokenUrl: string = '%s/billing/institution/%s/school/%s/braintree/token';

    constructor(private http: Http, private cookieService: CookieService) { }

    getPaymentMethod(parentEmail: string, isDefault: boolean): Observable<PaymentMethodResponse[]> {
        console.log('getPaymentMethod called: ', parentEmail);
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let params: URLSearchParams = new URLSearchParams();
        params.set('isDefault', isDefault.toString());
        params.set('parentEmail', parentEmail);
        let options = new RequestOptions({ headers: headers, search: params });
        let requestUrl = format(this.getPaymentMethodUrl, getApiHost());
        console.log('url: ', requestUrl, 'options: ', options);
        return this.http.get(requestUrl, options)
            .map((res: Response): PaymentMethodResponse[] => (res.json()))
            .catch(handleError);
    }

    getDefaultPaymentMethod(parentEmail: string): Observable<PaymentMethodResponse[]> {
        return this.getPaymentMethod(parentEmail, true);
    }

    getAllPaymentMethods(parentEmail: string): Observable<PaymentMethodResponse[]> {
        return this.getPaymentMethod(parentEmail, false);
    }

    addPaymentMethod(paymentMethodRequest: PaymentMethodRequest): Observable<PaymentMethodResponse> {
        console.log('addPaymentMethod called: ', paymentMethodRequest);
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let requestUrl = format(this.addPaymentMethodUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService));
        let requestBody = paymentMethodRequest;
        console.log('url: ', requestUrl, 'options: ', options);
        return this.http.post(requestUrl, requestBody, options)
            .map((res: Response): PaymentMethodResponse => (res.json()))
            .catch(handleError);
    }

    getBraintreeToken(): Observable<BraintreeTokenResponse> {
        console.log('getBraintreeToken called ');
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let requestUrl = format(self.getBraintreeTokenUrl, getApiHost(), getInstitutionShortCodeFromTokenObject(self.cookieService),
            getSchoolCodeFromTokenObject(self.cookieService));
        console.log('url: ', requestUrl, 'options: ', options);
        return this.http.get(requestUrl, options)
            .map((res: Response): BraintreeTokenResponse => (res.json()))
            .catch(handleError);
    }

}
