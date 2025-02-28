import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../map/map.service';
import { H4Map } from './h4map';
import { SortService, Sort } from '../sort/sort.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'heroes4',
    templateUrl: 'heroes4.html',
    styleUrls: ['heroes4.css'],
    standalone: false
})
export class Heroes4Component implements OnInit, OnDestroy {

    maps: H4Map[] = [];
    sort: Sort = new Sort();

    private sortSubscription?: Subscription;

    constructor(private mapService: MapService, private sortService: SortService) {
    }

    ngOnInit() {
        this.mapService.getH4Maps().subscribe(result => this.maps = result);
        this.sortSubscription = this.sortService.sortSubject.subscribe(result => this.sort = result);
    }

    ngOnDestroy() {
        if (this.sortSubscription) {
            this.sortSubscription.unsubscribe();
        }
    }

}