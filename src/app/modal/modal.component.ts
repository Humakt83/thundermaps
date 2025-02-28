import { Component } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: 'modal.html',
    styleUrls: ['modal.css'],
    standalone: false  
})
export class ModalComponent {

    isShown: boolean = false;

    show() {
        this.isShown = true;
    }

    hide() {
        this.isShown = false;
    }
}