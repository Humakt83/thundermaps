import { Component, OnInit } from '@angular/core';
import { MapService } from '../shared/map.service';
import { H4Map } from '../heroes4/h4map';

@Component({
    selector: 'heroes5',
    templateUrl: 'app/heroes4/heroes4.html',
    styleUrls: ['app/heroes4/heroes4.css']
})
export class Heroes5Component implements OnInit {

    maps: H4Map[] = [];

    constructor(private mapService: MapService) {      
    }

    ngOnInit() {
        this.mapService.getH5Maps().subscribe(result => this.maps = result);
    }

}