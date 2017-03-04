import { Component, Input } from '@angular/core';
import { H4Map } from './h4map';

@Component({
    selector: 'h4map',
    templateUrl: 'app/heroes4/h4map.html',
    styleUrls: ['app/heroes4/h4map.css']
})
export class H4MapComponent {

    @Input('map')
    map: H4Map;

}