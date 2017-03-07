import { Component } from '@angular/core';
import { GameMode } from './gamemode';
import { Pairs } from './pairs';

@Component({
    moduleId: __moduleName,
    selector: 'pairs',
    template: `<div class="pairs">
                <div *ngIf="selectGameMode">
                    <div class="pairsButton" (click)="toSettings(${GameMode.SINGLE})">SINGLE</div>
                    <div class="pairsButton" (click)="toSettings(${GameMode.MULTI})">MULTI</div>
                </div>
                <settings *ngIf="!selectGameMode && !gameStarted" [mode]="selectedGameMode" (game)="startGame($event)"></settings>
            </div>`,
    styleUrls: ['pairs.component.css']
})
export class PairsComponent {

    selectGameMode : boolean = true;
    selectedGameMode : GameMode;
    gameStarted: boolean = false;

    toSettings(mode: GameMode) {
        this.selectGameMode = false;
        this.selectedGameMode = mode;
    }

    startGame(pairs: Pairs) {
        this.gameStarted = true;
        console.log(pairs);
    }
}