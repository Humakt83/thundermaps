import { Component } from '@angular/core';
import { quotes } from './quotes';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    styleUrls: ['app/home/home.css']
})
export class HomeComponent {

    quote: string = this.pickRandomQuote();

    private pickRandomQuote(): string {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }    
}
