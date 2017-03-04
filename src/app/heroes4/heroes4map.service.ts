import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { H4Map } from './h4map';

@Injectable()
export class Heroes4MapService {

    constructor(private http: Http) {}

    public getMaps(): Observable<H4Map[]> {
        return this.http.get('assets/maps/heroes4/h4maps.json')
            .map((response: Response) => response.json().map((json: any) => H4Map.fromJson(json)));
    }

}