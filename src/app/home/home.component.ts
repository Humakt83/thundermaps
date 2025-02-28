import { Component } from '@angular/core';
import { quotes } from './quotes';

@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['home.css'],
    standalone: false
})
export class HomeComponent {

    quote: string = this.pickRandomQuote();

    private pickRandomQuote(): string {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }    
}
