import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import 'rxjs/Rx';
import { PairsComponent } from './pairs.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [PairsComponent, SettingsComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: []
})
export class PairsModule {
}
