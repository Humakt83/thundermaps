import { Component, Input } from '@angular/core';

@Component({
    selector: 'sub-title',
    template: '<h2>{{titleText}}</h2>',
    styleUrls: ['title.css'],
    standalone: false
})
export class TitleComponent {

    @Input({required: true})
    titleText!: string;
}