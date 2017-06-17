import { Pipe, PipeTransform } from '@angular/core';
import { SortBy, Sort } from './sort.service';

@Pipe({
    name: 'sortmaps'
})
export class SortPipe implements PipeTransform {

    private compareWithAscending = (a: any, b: any, ascending: boolean): number => {
        let ascendingMultiplier = ascending ? -1 : 1;                 
        if (b > a) return 1 * ascendingMultiplier; 
        if (a > b) return -1 * ascendingMultiplier;            
        return 0;
    }

    transform(maps: any[], sort: Sort): any[] {
        if (sort.sortBy === SortBy.YEAR) {
            return maps.sort((a: any, b: any) => this.compareWithAscending(a.year, b.year, sort.ascending));
        } else if (sort.sortBy === SortBy.SIZE) {
            return maps.sort((a: any, b: any) => this.compareWithAscending(a.size, b.size, sort.ascending));
        } else {
            return maps.sort((a: any, b: any) => this.compareWithAscending(a.name, b.name, sort.ascending));
        }
    }


}