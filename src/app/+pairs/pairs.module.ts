import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import 'rxjs/Rx';
import { PairsComponent } from './pairs.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { SafeStylePipe } from './safestyle.pipe';

@NgModule({
    declarations: [PairsComponent, SettingsComponent, GameComponent, SafeStylePipe],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: []
})
export class PairsModule {
}
