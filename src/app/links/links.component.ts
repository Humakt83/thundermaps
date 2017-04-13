import { Component } from '@angular/core';

const IMAGE_PREFIX: string = 'assets/images/';

@Component({
    selector: 'links',
    templateUrl: 'links.html',
    styleUrls: ['links.css']
})
export class LinksComponent {

    links: Link[] = [
        new Link('https://www.celestialheavens.com/', IMAGE_PREFIX + 'celestial_heavens_logo.jpg', 'Celestial Heavens is possibly the best Heroes of Might and Magic site there is. Lot of maps, map reviews, useful files, guides, walkthroughs, fresh news and etc.'),
        new Link('http://www.toheroes.com/', IMAGE_PREFIX + 'ToH.jpg', 'Tournament of Honor is a popular HoMM site dedicated to multiplayer. It has rankings, clans and smaller tournaments.'),
        new Link('http://www.heroesofmightandmagic.com/', IMAGE_PREFIX + 'ageofheroes.jpg', 'Resource site for all Heroes of Might and Magic.'),
        new Link('http://equilibris.celestialheavens.com/eng/news.html', IMAGE_PREFIX + 'eq-h-logo.gif', 'Site for Equilibris, recommended balance mod for Heroes of Might and Magic IV.')
    ]

}

class Link {

    constructor(public link: string, public logo: string, public description: string) {        
    }
}
