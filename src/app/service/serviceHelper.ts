import { CookieService } from 'angular2-cookie/core';
import * as _throw from 'rxjs/observable/throw';

export function getApiHost() {
    switch (window.location.hostname) {
        case 'app-beta.secureslice.com':
            return 'https://api.secureslice.com/stage';
        case 'localhost':
            return 'http://localhost:8100/secs';
        default:
            return 'https://api.secureslice.com/prod';
    }
};

function getCurrentUser(cookieService: CookieService): any {
    return cookieService.getObject('loggedInUser');
}

export function getAuthorizationHeader(cookieService: CookieService): string {
    return 'Bearer ' + getCurrentUser(cookieService).token;
}

export function getInstitutionShortCodeFromTokenObject(cookieService: CookieService): string {
    return getCurrentUser(cookieService).institutionShortCode;
}

export function getSchoolCodeFromTokenObject(cookieService: CookieService): string {
    return getCurrentUser(cookieService).schoolCode;
}

export function getUserEmailFromTokenObject(cookieService: CookieService): string {
    return getCurrentUser(cookieService).email;
}

export function handleError(error: any) {
    this.loggedIn = false;
    try {
        console.error('LALALA:', error.statusText); // log to console instead
        return _throw._throw(error.statusText);
    } catch (err) {
        console.error('LALALA1:', 'Actual error from server: ', error);
        console.error('LALALA2:', 'Error while parsing error: ', err);
        return _throw._throw('Unknown service error');
    }
}
