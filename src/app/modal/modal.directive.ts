import { Directive, HostListener, Input } from '@angular/core';
import { ModalComponent } from './modal.component';

@Directive({ selector: '[show-modal]', standalone: false})
export class ModalDirective {

    @Input('show-modal')
    content: ModalComponent | null = null;

    constructor() {
    }

    @HostListener('click')
    showOnClick() {
        this.showModal();
    }

    private showModal() {
        if (this.content ) this.content.show();
    }
}