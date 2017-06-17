import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SortService {

    sortSubject: BehaviorSubject<Sort> = new BehaviorSubject(new Sort());

    setSortBy(sortBy: SortBy) {
        const previous = this.sortSubject.getValue();
        this.sortSubject.next(new Sort(sortBy, !previous.ascending));
    }
    
}

export class Sort {

    constructor(public sortBy: SortBy = SortBy.NAME, public ascending: boolean = true) {}

}

export enum SortBy {
    NAME, YEAR
}