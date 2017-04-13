import { Component, OnInit } from '@angular/core';
import { MapService } from '../shared/map.service';
import { H3Map } from './h3map';
import { MapSize } from '../shared/mapsize';

@Component({
    selector: 'heroes3',
    templateUrl: 'heroes3.html',
    styleUrls: ['heroes3.css']
})
export class Heroes3Component implements OnInit {

    maps: H3Map[] = [];
    mapSize = MapSize;

    constructor(private mapService: MapService) {      
    }

    ngOnInit() {
        this.mapService.getH3Maps().subscribe(result => this.maps = result);
    }

}