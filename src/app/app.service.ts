
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    http: Http;
    headers: Headers;
    api_url: string = 'http://localhost:3000';
    api_near_addresses: string = this.api_url + '/nearAddresses';
    api_current_addresses: string = this.api_url + '/currentAddress';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    //Send server request to get near addresses from current location (radius 1000m)
    nearAddresses(currentPosition): Observable<any> {
        return this.http
            .get(this.api_near_addresses + '?currentPosition=' + currentPosition, { headers: this.headers })
            .pipe(map(res => res.json()));
    }

    //Send server request to get current address
    currentAddress(currentPosition): Observable<any> {
        return this.http
            .get(this.api_current_addresses + '?currentPosition=' + currentPosition, { headers: this.headers })
            .pipe(map(res => res.json()));
    }
}