import { Directive, HostListener, Input } from '@angular/core';
import { ModalComponent } from './modal.component';

@Directive({ selector: '[show-modal]'})
export class ModalDirective {

    @Input('show-modal')
    content: ModalComponent;

    constructor() {
    }

    @HostListener('click')
    showOnClick() {
        this.showModal();
    }

    private showModal() {
        this.content.show();
    }
}