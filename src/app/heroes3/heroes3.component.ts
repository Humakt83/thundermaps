import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../shared/map.service';
import { H3Map } from './h3map';
import { MapSize } from '../shared/mapsize';
import { SortService, Sort } from '../sort/sort.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'heroes3',
    templateUrl: 'heroes3.html',
    styleUrls: ['heroes3.css']
})
export class Heroes3Component implements OnInit, OnDestroy {

    maps: H3Map[] = [];
    mapSize = MapSize;
    sort: Sort;

    private sortSubscription: Subscription;
    

    constructor(private mapService: MapService, private sortService: SortService) {
    }

    ngOnInit() {
        this.mapService.getH3Maps().first().subscribe(result => this.maps = result);
        this.sortSubscription = this.sortService.sortSubject.subscribe(result => this.sort = result);
    }

    ngOnDestroy() {
        this.sortSubscription.unsubscribe();
    }

}