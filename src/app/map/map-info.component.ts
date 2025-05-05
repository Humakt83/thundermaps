import { Component, Input } from '@angular/core';
import { MapSize } from './mapsize';
import { HeroesMap } from './map';

@Component({
    selector: 'map-info',
    templateUrl: 'map-info.html',
    styleUrls: ['map-info.css'],
    standalone: false
})
export class MapInfoComponent {

    mapSize = MapSize;

    @Input({required: true})
    map!: HeroesMap;

    @Input({required: false})
    mapComments: Array<string> = [];

    commentButtonPressed = false;
}