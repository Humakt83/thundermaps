import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../map/map.service';
import { H4Map } from './h4map';
import { SortService, Sort } from '../sort/sort.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'heroes4',
    templateUrl: 'heroes4.html',
    styleUrls: ['heroes4.css']
})
export class Heroes4Component implements OnInit, OnDestroy {

    maps: H4Map[] = [];
    sort: Sort;

    private sortSubscription: Subscription;

    constructor(private mapService: MapService, private sortService: SortService) {
    }

    ngOnInit() {
        this.mapService.getH4Maps().first().subscribe(result => this.maps = result);
        this.sortSubscription = this.sortService.sortSubject.subscribe(result => this.sort = result);
    }

    ngOnDestroy() {
        this.sortSubscription.unsubscribe();
    }

}