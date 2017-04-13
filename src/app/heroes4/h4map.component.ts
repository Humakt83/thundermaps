import { Component, Input } from '@angular/core';
import { H4Map } from './h4map';
import { MapSize } from '../shared/mapsize';

@Component({
    selector: 'h4map',
    templateUrl: 'h4map.html',
    styleUrls: ['h4map.css']
})
export class H4MapComponent {

    @Input('map')
    map: H4Map;

    mapSize = MapSize;
    
}