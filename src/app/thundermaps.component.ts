import { Component, OnInit } from '@angular/core';
import { PairsService } from './+pairs/index';

const PREFIX_TO_IMAGES = 'assets/images/pairs/';
const IMAGE_POSTFIX = '.png';
const IMAGES = ['Arrow', 'Axe', 'Backpack', 'Book', 'Boots', 'Bow', 'Cards', 'Chainmail', 'Clover', 'Crocodile', 'Crossbow', 'Gems', 'Gold',
                'Horseshoe', 'Medal', 'Moose', 'Mushroom', 'Oak', 'Pinetree', 'Platemail', 'Ring', 'Shield', 'Staff', 'Stone', 'Sword', 'Treasure', 'Willow']

@Component({
    selector: 'thundermaps',
    templateUrl: 'app/thundermaps.html',
    styleUrls: ['app/thundermaps.css']    
})
export class ThundermapsComponent implements OnInit {

    constructor(private pairsService: PairsService) {        
    }

    ngOnInit() {        
        this.pairsService.setImages(IMAGES.map(img => PREFIX_TO_IMAGES.concat(img, IMAGE_POSTFIX)));
    }
}
