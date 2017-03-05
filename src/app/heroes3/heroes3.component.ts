import { Component, OnInit } from '@angular/core';
import { Heroes3MapService } from './heroes3map.service';
import { H3Map } from './h3map';
import { MapSize } from '../shared/mapsize';

@Component({
    selector: 'heroes3',
    templateUrl: 'app/heroes3/heroes3.html',
    styleUrls: ['app/heroes3/heroes3.css']
})
export class Heroes3Component implements OnInit {

    maps: H3Map[] = [];
    mapSize = MapSize;

    constructor(private mapService: Heroes3MapService) {      
    }

    ngOnInit() {
        this.mapService.getMaps().subscribe(result => this.maps = result);
    }

}