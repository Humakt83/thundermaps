import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../map/map.service';
import { H3Map } from './h3map';
import { MapSize } from '../map/mapsize';
import { SortService, Sort } from '../sort/sort.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'heroes3',
    templateUrl: 'heroes3.html',
    styleUrls: ['heroes3.css'],
    standalone: false
})
export class Heroes3Component implements OnInit, OnDestroy {

    maps: H3Map[] = [];
    mapSize = MapSize;
    public sort: Sort = new Sort();

    private sortSubscription?: Subscription;
    

    constructor(private mapService: MapService, private sortService: SortService) {
    }

    ngOnInit() {
        this.mapService.getH3Maps().subscribe(result => this.maps = result);
        this.sortService.sortSubject.subscribe(result => this.sort = result);
    }

    ngOnDestroy() {
        if (this.sortSubscription) {
            this.sortSubscription.unsubscribe();
        }
    }

}