import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { format } from 'util';
import { PaymentMethodRequest, PaymentMethodResponse } from '../models';

import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

import { Staff, Institution } from '../models';
import { getApiHost, handleError, getAuthorizationHeader } from './serviceHelper';

@Injectable()
export class InstitutionService {

    private readonly addPaymentMethodUrl: string = '%s/billing/paymentMethod';
    private readonly getPaymentMethodUrl: string = '%s/billing/paymentMethod';

    constructor(private http: Http, private cookieService: CookieService) { }

    getPaymentMethod(parentEmail: string, isDefault: boolean): Observable<PaymentMethodResponse> {
        console.log('getPaymentMethod called: ', parentEmail);
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let params: URLSearchParams = new URLSearchParams();
        params.set('isDefault', isDefault.toString());
        let options = new RequestOptions({ headers: headers, search: params });
        let url = format(this.getPaymentMethodUrl, getApiHost());
        console.log('url: ', url, 'options: ', options);
        return this.http.get(url, options)
            .map((res: Response) => {
                let institution: Institution = res.json();
                return institution;
            })
            .catch(handleError);
    }

    getDefaultPaymentMethod(parentEmail: string): Observable<PaymentMethodResponse> {
       return this.getPaymentMethod(parentEmail, true);
    }

    getAllPaymentMethods(parentEmail: string): Observable<PaymentMethodResponse> {
       return this.getPaymentMethod(parentEmail, false);
    }

    addPaymentMethod(parentEmail: string, paymentMethod: PaymentMethod): Observable<PaymentMethodResponse> {
       console.log('addPaymentMethod called: ', parentEmail, paymentMethod);
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': getAuthorizationHeader(self.cookieService)
        });
        let options = new RequestOptions({ headers: headers });
        let url = format(this.addPaymentMethodUrl, getApiHost());
        let requestBody = new PaymentMethodRequest(paymentMethod, parentEmail);
        console.log('url: ', url, 'options: ', options);
        return this.http.post(url, paymentMethod, options)
            .map((res: Response) => {
                let institution: Institution = res.json();
                return institution;
            })
            .catch(handleError);
    }

}
