import { Component, OnInit } from '@angular/core';
import { MapService } from '../shared/map.service';
import { H4Map } from './h4map';

@Component({
    selector: 'heroes4',
    templateUrl: 'heroes4.html',
    styleUrls: ['heroes4.css']
})
export class Heroes4Component implements OnInit {

    maps: H4Map[] = [];

    constructor(private mapService: MapService) {      
    }

    ngOnInit() {
        this.mapService.getH4Maps().subscribe(result => this.maps = result);
    }

}