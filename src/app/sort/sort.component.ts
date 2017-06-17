import { Component } from '@angular/core';
import { SortService, SortBy } from './sort.service';

@Component({
    selector: 'mapsort',
    templateUrl: 'sort.html',
    styleUrls: ['sort.css']
})
export class SortComponent {

    sortByValues = SortBy;

    constructor(private sortService: SortService) {
    }

    sort(sortBy: SortBy) {
        this.sortService.setSortBy(sortBy);
    }

}