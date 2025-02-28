import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { H4Map } from '../heroes4/h4map';
import { H3Map } from '../heroes3/h3map';

@Injectable()
export class MapService {

    constructor(private http: HttpClient) {}

    public getH3Maps(): Observable<H3Map[]> {
        return this.http.get<H3Map[]>('assets/maps/heroes3/h3maps.json');
    }

    public getH4Maps(): Observable<H4Map[]> {
        return this.http.get<H4Map[]>('assets/maps/heroes4/h4maps.json')
    }

    public getH5Maps(): Observable<H4Map[]> {
        return this.http.get<H4Map[]>('assets/maps/heroes5/h5maps.json')
    }

}