import { Component, ViewEncapsulation } from '@angular/core';
import { PairsService } from 'ng2pairs';

const PREFIX_TO_IMAGES = 'assets/images/pairs/';
const IMAGE_POSTFIX = '.png';
const IMAGES = ['Arrow', 'Axe', 'Backpack', 'Book', 'Boots', 'Bow', 'Cards', 'Chainmail', 'Clover', 'Crocodile', 'Crossbow', 'Gems', 'Gold',
                'Horseshoe', 'Medal', 'Moose', 'Mushroom', 'Oak', 'Pinetree', 'Platemail', 'Ring', 'Shield', 'Staff', 'Stone', 'Sword', 'Treasure', 'Willow']

@Component({
    selector: 'thundermaps',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'thundermaps.html',
    styleUrls: ['thundermaps.css'],
    standalone: false
})
export class ThundermapsComponent {

    constructor(private pairsService: PairsService) {        
    }

    ngOnInit() {        
        this.pairsService.setImages(IMAGES.map(img => PREFIX_TO_IMAGES.concat(img, IMAGE_POSTFIX)));
    }
}
