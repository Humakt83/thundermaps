import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { H3Map } from './h3map';

@Injectable()
export class Heroes3MapService {

    constructor(private http: Http) {}

    public getMaps(): Observable<H3Map[]> {
        return this.http.get('assets/maps/heroes3/h3maps.json')
            .map((response: Response) => response.json().map((json: any) => H3Map.fromJson(json)));
    }

}