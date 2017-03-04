import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: 'app/modal/modal.html',
    styleUrls: ['app/modal/modal.css']    
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