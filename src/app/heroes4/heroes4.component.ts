import { Component, OnInit } from '@angular/core';
import { Heroes4MapService } from './heroes4map.service';
import { H4Map } from './h4map';

@Component({
    selector: 'heroes4',
    templateUrl: 'app/heroes4/heroes4.html',
    styleUrls: ['app/heroes4/heroes4.css']
})
export class Heroes4Component implements OnInit {

    maps: H4Map[] = [];

    constructor(private mapService: Heroes4MapService) {      
    }

    ngOnInit() {
        this.mapService.getMaps().subscribe(result => this.maps = result);
    }

}