import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { H4Map } from '../heroes4/h4map';
import { H3Map } from '../heroes3/h3map';

@Injectable()
export class MapService {

    constructor(private http: Http) {}

    public getH3Maps(): Observable<H3Map[]> {
        return this.http.get('assets/maps/heroes3/h3maps.json')
            .map((response: Response) => response.json().map((json: any) => H3Map.fromJson(json)));
    }

    public getH4Maps(): Observable<H4Map[]> {
        return this.http.get('assets/maps/heroes4/h4maps.json')
            .map((response: Response) => response.json().map((json: any) => H4Map.fromJson(json)));
    }

    public getH5Maps(): Observable<H4Map[]> {
        return this.http.get('assets/maps/heroes5/h5maps.json')
            .map((response: Response) => response.json().map((json: any) => H4Map.fromJson(json)));
    }

}