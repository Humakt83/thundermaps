import { Component, Input } from '@angular/core';
import { H4Map } from './h4map';
import { MapSize } from '../map/mapsize';

@Component({
    selector: 'h4map',
    templateUrl: 'h4map.html',
    styleUrls: ['h4map.css'],
    standalone: false
})
export class H4MapComponent {

    @Input({required: true})
    map!: H4Map;

    mapSize = MapSize;
    
}